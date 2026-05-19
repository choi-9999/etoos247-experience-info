const sampleBranches = window.sampleBranches || [];

let branches = normalizeBranches(sampleBranches);

const branchList = document.querySelector("#branchList");
const branchSearch = document.querySelector("#branchSearch");
const emptyState = document.querySelector("#emptyState");
const detailCard = document.querySelector("#detailCard");
const detailBranch = document.querySelector("#detailBranch");
const peopleList = document.querySelector("#peopleList");
const adminToggle = document.querySelector("#adminToggle");
const adminBox = document.querySelector("#adminBox");
const adminLogin = document.querySelector("#adminLogin");
const adminPassword = document.querySelector("#adminPassword");
const uploadBox = document.querySelector("#uploadBox");
const excelFile = document.querySelector("#excelFile");
const resetData = document.querySelector("#resetData");
const adminLogout = document.querySelector("#adminLogout");
const adminMessage = document.querySelector("#adminMessage");
const uploadSummary = document.querySelector("#uploadSummary");
const adminPasswordDialog = document.querySelector("#adminPasswordDialog");
const adminPasswordMessage = document.querySelector("#adminPasswordMessage");
const cancelAdminPassword = document.querySelector("#cancelAdminPassword");
const branchPasswordDialog = document.querySelector("#branchPasswordDialog");
const branchPasswordForm = document.querySelector("#branchPasswordForm");
const passwordDialogTitle = document.querySelector("#passwordDialogTitle");
const branchPasswordInput = document.querySelector("#branchPasswordInput");
const branchPasswordMessage = document.querySelector("#branchPasswordMessage");
const cancelBranchPassword = document.querySelector("#cancelBranchPassword");

let selectedBranch = "";
let isAdmin = false;
let adminSessionPassword = "";
let pendingBranch = null;

function loadBranches() {
  return fetchBranches();
}

async function saveBranches(nextBranches) {
  const response = await fetch("/api/branches", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      adminPassword: adminSessionPassword,
      branches: normalizeBranches(nextBranches)
    })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "서버 저장에 실패했습니다.");
  }

  branches = normalizeBranches(data.branches);
  return branches;
}

async function fetchBranches() {
  try {
    const response = await fetch("/api/branches", {
      cache: "no-store"
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "데이터를 불러오지 못했습니다.");
    }

    branches = normalizeBranches(data.branches);
  } catch {
    branches = normalizeBranches(sampleBranches);
  }

  clearSelectedBranch();
  renderBranches(branchSearch.value);
}

async function verifyAdminPassword(password) {
  const response = await fetch("/api/branches", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      action: "verify",
      adminPassword: password
    })
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "비밀번호가 일치하지 않습니다.");
  }

  return true;
}

function normalizeBranches(branchData) {
  return branchData.map((item) => ({
    branch: item.branch,
    password: String(item.password || "1234"),
    people: Array.isArray(item.people) ? item.people : []
  }));
}

function renderBranches(filterText = "") {
  const keyword = filterText.trim().toLowerCase();
  const filteredBranches = branches.filter((item) =>
    item.branch.toLowerCase().includes(keyword)
  ).sort((first, second) => first.branch.localeCompare(second.branch, "ko"));

  branchList.innerHTML = "";

  if (filteredBranches.length === 0) {
    const noResult = document.createElement("p");
    noResult.className = "no-result";
    noResult.textContent = "검색 결과가 없습니다.";
    branchList.append(noResult);
    return;
  }

  filteredBranches.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "branch-button";
    button.textContent = item.branch;
    button.setAttribute("aria-pressed", item.branch === selectedBranch ? "true" : "false");

    if (item.branch === selectedBranch) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => requestBranchPassword(item));
    branchList.append(button);
  });
}

function requestBranchPassword(item) {
  pendingBranch = item;
  passwordDialogTitle.textContent = `${item.branch} 비밀번호 입력`;
  branchPasswordInput.value = "";
  branchPasswordMessage.textContent = "";

  if (typeof branchPasswordDialog.showModal === "function") {
    branchPasswordDialog.showModal();
  } else {
    branchPasswordDialog.setAttribute("open", "");
  }

  branchPasswordInput.focus();
}

function selectBranch(item) {
  selectedBranch = item.branch;
  detailBranch.textContent = item.branch;
  renderPeople(item.people);
  emptyState.classList.add("hidden");
  detailCard.classList.remove("hidden");
  renderBranches(branchSearch.value);
}

function renderPeople(people) {
  peopleList.innerHTML = "";

  people.forEach((person, index) => {
    const card = document.createElement("section");
    card.className = "person-card";

    const title = document.createElement("h3");
    title.textContent = `${index + 1}. ${person.name}`;

    const infoList = document.createElement("dl");
    infoList.className = "info-list";

    const rows = [
      ["이름", person.name],
      ["연락처", person.phone],
      ["블로그주소", person.blog],
      ["비고", person.note]
    ];

    rows.forEach(([label, value]) => {
      const row = document.createElement("div");
      const term = document.createElement("dt");
      const description = document.createElement("dd");

      term.textContent = label;

      if (label === "연락처" && value) {
        const copyRow = document.createElement("span");
        const phoneText = document.createElement("span");
        const copyButton = document.createElement("button");

        copyRow.className = "copy-row";
        phoneText.textContent = value;
        copyButton.className = "copy-button";
        copyButton.type = "button";
        copyButton.textContent = "복사";
        copyButton.addEventListener("click", () => copyPhone(value, copyButton));

        copyRow.append(phoneText, copyButton);
        description.append(copyRow);
      } else if (label === "블로그주소" && value) {
        const link = document.createElement("a");
        link.href = normalizeUrl(value);
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = value;
        description.append(link);
      } else {
        description.textContent = value || "-";
      }

      row.append(term, description);
      infoList.append(row);
    });

    card.append(title, infoList);
    peopleList.append(card);
  });
}

async function copyPhone(phone, button) {
  try {
    await navigator.clipboard.writeText(phone);
    button.textContent = "복사됨";
    window.setTimeout(() => {
      button.textContent = "복사";
    }, 1400);
  } catch {
    button.textContent = "실패";
    window.setTimeout(() => {
      button.textContent = "복사";
    }, 1400);
  }
}

function getTotalPeople(branchData) {
  return branchData.reduce((total, item) => total + item.people.length, 0);
}

function normalizeUrl(url) {
  const trimmedUrl = String(url).trim();
  return /^https?:\/\//i.test(trimmedUrl) ? trimmedUrl : `https://${trimmedUrl}`;
}

function parseExcelRows(rows) {
  const groupedBranches = new Map();

  rows.forEach((row) => {
    const branch = String(row["지점명"] || row["지점"] || row["branch"] || "").trim();
    const password = String(row["비밀번호"] || row["password"] || "").trim();
    const name = String(row["이름"] || row["name"] || "").trim();
    const phone = String(row["연락처"] || row["phone"] || "").trim();
    const blog = String(row["블로그주소"] || row["블로그"] || row["blog"] || "").trim();
    const note = String(row["비고"] || row["note"] || "").trim();

    if (!branch || !name) {
      return;
    }

    if (!groupedBranches.has(branch)) {
      groupedBranches.set(branch, {
        branch,
        password,
        people: []
      });
    }

    if (password) {
      groupedBranches.get(branch).password = password;
    }

    groupedBranches.get(branch).people.push({
      name,
      phone,
      blog,
      note
    });
  });

  return Array.from(groupedBranches.values()).filter((item) => item.password);
}

function updateAdminState() {
  adminBox.classList.toggle("hidden", !isAdmin);
  uploadBox.classList.toggle("hidden", !isAdmin);

  if (isAdmin) {
    adminMessage.textContent = "관리자 모드입니다. 엑셀 파일을 업로드하면 서버 데이터가 새 목록으로 교체됩니다.";
    return;
  }

  adminPassword.value = "";
  excelFile.value = "";
  uploadSummary.textContent = "";
  adminMessage.textContent = "";
}

function clearSelectedBranch() {
  selectedBranch = "";
  detailCard.classList.add("hidden");
  emptyState.classList.remove("hidden");
  peopleList.innerHTML = "";
  detailBranch.textContent = "";
}

function closeBranchPasswordDialog() {
  pendingBranch = null;
  branchPasswordInput.value = "";
  branchPasswordMessage.textContent = "";

  if (branchPasswordDialog.open) {
    branchPasswordDialog.close();
  } else {
    branchPasswordDialog.removeAttribute("open");
  }
}

function openAdminPasswordDialog() {
  adminPassword.value = "";
  adminPasswordMessage.textContent = "";

  if (typeof adminPasswordDialog.showModal === "function") {
    adminPasswordDialog.showModal();
  } else {
    adminPasswordDialog.setAttribute("open", "");
  }

  adminPassword.focus();
}

function closeAdminPasswordDialog() {
  adminPassword.value = "";
  adminPasswordMessage.textContent = "";

  if (adminPasswordDialog.open) {
    adminPasswordDialog.close();
  } else {
    adminPasswordDialog.removeAttribute("open");
  }
}

branchSearch.addEventListener("input", (event) => {
  renderBranches(event.target.value);
});

adminToggle.addEventListener("click", () => {
  if (isAdmin) {
    adminBox.classList.toggle("hidden");
    return;
  }

  openAdminPasswordDialog();
});

adminLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  const password = adminPassword.value;

  verifyAdminPassword(password)
    .then(() => {
      isAdmin = true;
      adminSessionPassword = password;
      closeAdminPasswordDialog();
      updateAdminState();
    })
    .catch((error) => {
      adminPasswordMessage.textContent = error.message || "비밀번호가 일치하지 않습니다.";
      adminPassword.select();
    });
});

cancelAdminPassword.addEventListener("click", () => {
  closeAdminPasswordDialog();
});

adminPasswordDialog.addEventListener("close", () => {
  if (!isAdmin) {
    adminSessionPassword = "";
  }

  adminPassword.value = "";
  adminPasswordMessage.textContent = "";
});

branchPasswordForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!pendingBranch) {
    closeBranchPasswordDialog();
    return;
  }

  if (branchPasswordInput.value !== pendingBranch.password) {
    branchPasswordMessage.textContent = "비밀번호가 일치하지 않습니다.";
    branchPasswordInput.select();
    return;
  }

  const branchToShow = pendingBranch;
  closeBranchPasswordDialog();
  selectBranch(branchToShow);
});

cancelBranchPassword.addEventListener("click", () => {
  closeBranchPasswordDialog();
});

branchPasswordDialog.addEventListener("close", () => {
  pendingBranch = null;
  branchPasswordInput.value = "";
  branchPasswordMessage.textContent = "";
});

excelFile.addEventListener("change", async (event) => {
  const file = event.target.files[0];

  if (!file) {
    return;
  }

  if (!window.XLSX) {
    adminMessage.textContent = "엑셀 업로드 라이브러리를 불러오지 못했습니다. 인터넷 연결을 확인한 뒤 다시 열어주세요.";
    return;
  }

  try {
    const fileBuffer = await file.arrayBuffer();
    const workbook = XLSX.read(fileBuffer, { type: "array" });
    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(firstSheet, { defval: "" });
    const nextBranches = parseExcelRows(rows);

    if (nextBranches.length === 0) {
      adminMessage.textContent = "업로드할 데이터가 없습니다. 첫 행에 지점명, 비밀번호, 이름, 연락처, 블로그주소, 비고가 있는지 확인하세요.";
      return;
    }

    await saveBranches(nextBranches);
    clearSelectedBranch();
    renderBranches(branchSearch.value);
    uploadSummary.textContent = `업로드 요약: 총 ${nextBranches.length}개 지점 / ${getTotalPeople(nextBranches)}명`;
    adminMessage.textContent = "체험단 정보를 서버에 저장했습니다.";
  } catch (error) {
    adminMessage.textContent = error.message || "엑셀 파일을 읽는 중 오류가 발생했습니다.";
  }
});

resetData.addEventListener("click", async () => {
  try {
    await saveBranches(sampleBranches);
  } catch (error) {
    adminMessage.textContent = error.message || "샘플 데이터 복구 중 오류가 발생했습니다.";
    return;
  }

  clearSelectedBranch();
  renderBranches(branchSearch.value);
  uploadSummary.textContent = `현재 데이터: 총 ${branches.length}개 지점 / ${getTotalPeople(branches)}명`;
  adminMessage.textContent = "서버 데이터를 샘플 데이터로 복구했습니다.";
});

adminLogout.addEventListener("click", () => {
  isAdmin = false;
  adminSessionPassword = "";
  updateAdminState();
  adminBox.classList.add("hidden");
});

updateAdminState();
loadBranches();
