const ADMIN_PASSWORD = "etoos247";
const STORAGE_KEY = "etoos247ExperienceBranches";

const sampleBranches = [
  {
    branch: "강남점",
    password: "1234",
    people: [
      {
        name: "홍길동",
        phone: "010-0000-0000",
        note: "오전 연락 가능"
      },
      {
        name: "김하은",
        phone: "010-0000-0001",
        note: "문자 우선 요청"
      }
    ]
  },
  {
    branch: "부산점",
    password: "1234",
    people: [
      {
        name: "김민지",
        phone: "010-1111-1111",
        note: "문자 우선 요청"
      },
      {
        name: "정도윤",
        phone: "010-1111-1112",
        note: "오후 연락 가능"
      },
      {
        name: "이서아",
        phone: "010-1111-1113",
        note: "특이사항 없음"
      }
    ]
  },
  {
    branch: "대구점",
    password: "1234",
    people: [
      {
        name: "박서준",
        phone: "010-2222-2222",
        note: "신규 담당자"
      },
      {
        name: "한지우",
        phone: "010-2222-2223",
        note: "통화 부재 시 문자"
      }
    ]
  },
  {
    branch: "인천점",
    password: "1234",
    people: [
      {
        name: "이하늘",
        phone: "010-3333-3333",
        note: "오후 2시 이후 연락 가능"
      },
      {
        name: "윤채원",
        phone: "010-3333-3334",
        note: "첫 방문 예정"
      }
    ]
  },
  {
    branch: "광주점",
    password: "1234",
    people: [
      {
        name: "최유진",
        phone: "010-4444-4444",
        note: "특이사항 없음"
      },
      {
        name: "문시우",
        phone: "010-4444-4445",
        note: "보호자 동행"
      }
    ]
  }
];

let branches = loadBranches();

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
let pendingBranch = null;

function loadBranches() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (!savedData) {
    return normalizeBranches(sampleBranches);
  }

  try {
    const parsedData = JSON.parse(savedData);
    return Array.isArray(parsedData) && parsedData.length > 0 ? normalizeBranches(parsedData) : normalizeBranches(sampleBranches);
  } catch {
    return normalizeBranches(sampleBranches);
  }
}

function saveBranches(nextBranches) {
  branches = normalizeBranches(nextBranches);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(branches));
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

function parseExcelRows(rows) {
  const groupedBranches = new Map();

  rows.forEach((row) => {
    const branch = String(row["지점명"] || row["지점"] || row["branch"] || "").trim();
    const password = String(row["비밀번호"] || row["password"] || "").trim();
    const name = String(row["이름"] || row["name"] || "").trim();
    const phone = String(row["연락처"] || row["phone"] || "").trim();
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
      note
    });
  });

  return Array.from(groupedBranches.values()).filter((item) => item.password);
}

function updateAdminState() {
  adminBox.classList.toggle("hidden", !isAdmin);
  uploadBox.classList.toggle("hidden", !isAdmin);

  if (isAdmin) {
    adminMessage.textContent = "관리자 모드입니다. 엑셀 파일을 업로드하면 기존 목록이 새 데이터로 교체됩니다.";
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

  if (adminPassword.value !== ADMIN_PASSWORD) {
    adminPasswordMessage.textContent = "비밀번호가 일치하지 않습니다.";
    adminPassword.select();
    return;
  }

  isAdmin = true;
  closeAdminPasswordDialog();
  updateAdminState();
});

cancelAdminPassword.addEventListener("click", () => {
  closeAdminPasswordDialog();
});

adminPasswordDialog.addEventListener("close", () => {
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
      adminMessage.textContent = "업로드할 데이터가 없습니다. 첫 행에 지점명, 비밀번호, 이름, 연락처, 비고가 있는지 확인하세요.";
      return;
    }

    saveBranches(nextBranches);
    clearSelectedBranch();
    renderBranches(branchSearch.value);
    uploadSummary.textContent = `업로드 요약: 총 ${nextBranches.length}개 지점 / ${getTotalPeople(nextBranches)}명`;
    adminMessage.textContent = "체험단 정보를 업로드했습니다.";
  } catch {
    adminMessage.textContent = "엑셀 파일을 읽는 중 오류가 발생했습니다.";
  }
});

resetData.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  branches = normalizeBranches(sampleBranches);
  clearSelectedBranch();
  renderBranches(branchSearch.value);
  uploadSummary.textContent = `현재 데이터: 총 ${branches.length}개 지점 / ${getTotalPeople(branches)}명`;
  adminMessage.textContent = "샘플 데이터로 복구했습니다.";
});

adminLogout.addEventListener("click", () => {
  isAdmin = false;
  updateAdminState();
  adminBox.classList.add("hidden");
});

updateAdminState();
renderBranches();
