const sampleBranches = [
  {
    "branch": "일산서구",
    "password": "1234",
    "people": [
      {
        "name": "이진이",
        "phone": "010-3327-4642",
        "blog": "https://blog.naver.com/skyloves90?fromRss=true&trackingCode=rss",
        "note": "5월 28일 12시 방문희망"
      },
      {
        "name": "오지오",
        "phone": "010-2066-1415",
        "blog": "https://blog.naver.com/ozozfit?fromRss=true&trackingCode=rss",
        "note": "26일 15시 방문희망"
      },
      {
        "name": "이지연",
        "phone": "010-6556-4554",
        "blog": "https://blog.naver.com/ljyhello",
        "note": "평일 협의 후 방문"
      }
    ]
  },
  {
    "branch": "일산동구",
    "password": "1234",
    "people": [
      {
        "name": "도민지",
        "phone": "010-5806-3002",
        "blog": "https://blog.naver.com/alswl3002",
        "note": "21일 오후 7시 방문희망"
      },
      {
        "name": "권혁남",
        "phone": "010-3731-4753",
        "blog": "https://blog.naver.com/kwon411",
        "note": "27일 10시 방문희망"
      },
      {
        "name": "전서영",
        "phone": "010-5197-1383",
        "blog": "https://blog.naver.com/haeriut1156_?fromRss=true&trackingCode=rss",
        "note": "1일 11시 방문희망"
      }
    ]
  },
  {
    "branch": "인하대",
    "password": "1234",
    "people": [
      {
        "name": "김수란",
        "phone": "010-####-6901",
        "blog": "http://blog.naver.com/silver_o0",
        "note": "5월30일 토요일 1시"
      },
      {
        "name": "이수민",
        "phone": "010-####-4955",
        "blog": "https://blog.naver.com/le4955",
        "note": "주말 가능"
      },
      {
        "name": "김예진",
        "phone": "010-####-3147",
        "blog": "https://blog.naver.com/jin2usblog?fromRss=true&trackingCode=rss",
        "note": "5월 21일(목) 14시"
      }
    ]
  },
  {
    "branch": "광주수완",
    "password": "1234",
    "people": [
      {
        "name": "김미희",
        "phone": "010-####-9472",
        "blog": "http://blog.naver.com/ever9472",
        "note": "5월21일 (목) 11시"
      },
      {
        "name": "김아람",
        "phone": "010-####-5262",
        "blog": "https://blog.naver.com/yyiyuhyun",
        "note": "5월 21일 or 22일 오전 방문 가능"
      },
      {
        "name": "조정은",
        "phone": "010-####-2214",
        "blog": "https://blog.naver.com/wings1324",
        "note": "5월 23일 토요일 오전 11시"
      }
    ]
  },
  {
    "branch": "인천송도",
    "password": "1234",
    "people": [
      {
        "name": "노지애",
        "phone": "010-6827-5670",
        "blog": "https://blog.naver.com/darara5670",
        "note": "5월22일 오후 2시"
      },
      {
        "name": "엄영진",
        "phone": "010-2291-4524",
        "blog": "https://blog.naver.com/youngjin9610",
        "note": "5.22(금) 오전 10시"
      },
      {
        "name": "정진영",
        "phone": "010-9964-2580",
        "blog": "https://blog.naver.com/jjjjy0_0?fromRss=true&trackingCode=rss",
        "note": "5/27 수 14시"
      }
    ]
  },
  {
    "branch": "진주",
    "password": "1234",
    "people": [
      {
        "name": "김여진",
        "phone": "010-9399-9718",
        "blog": "https://blog.naver.com/gemma0125?fromRss=true&trackingCode=rss",
        "note": "5월30일 오후1시"
      },
      {
        "name": "박희애",
        "phone": "010-5319-0013",
        "blog": "https://blog.naver.com/gmldo111",
        "note": "5월 25일 낮 12시"
      },
      {
        "name": "장민진",
        "phone": "010-6829-0147",
        "blog": "https://blog.naver.com/ss-mom90?fromRss=true&trackingCode=rss",
        "note": "5.20수요일 오후 3시"
      }
    ]
  },
  {
    "branch": "부산교대",
    "password": "1234",
    "people": [
      {
        "name": "전재웅",
        "phone": "010-9520-8890",
        "blog": "https://blog.naver.com/thehyuntime",
        "note": "5월 22일 금 오후 3시"
      },
      {
        "name": "조상희",
        "phone": "010-9730-4545",
        "blog": "https://blog.naver.com/jshee45",
        "note": "5월 27일 오후 6시"
      },
      {
        "name": "김은희",
        "phone": "010-2661-4601",
        "blog": "https://blog.naver.com/wjdqls9796?fromRss=true&trackingCode=rss",
        "note": "29일 오후 12시반"
      }
    ]
  },
  {
    "branch": "하남",
    "password": "1234",
    "people": [
      {
        "name": "손현진",
        "phone": "010-####-9244",
        "blog": "https://blog.naver.com/jshj9244",
        "note": "20일 (수) 17시"
      },
      {
        "name": "이지혜",
        "phone": "010-####-0123",
        "blog": "https://blog.naver.com/gracejji",
        "note": "5월 22일 (수)오후3시"
      },
      {
        "name": "서경남",
        "phone": "010-####-8968",
        "blog": "https://blog.naver.com/tjrudska82?fromRss=true&trackingCode=rss",
        "note": "5.21 수 11시"
      }
    ]
  },
  {
    "branch": "의정부",
    "password": "1234",
    "people": [
      {
        "name": "최복은",
        "phone": "010-####-6355",
        "blog": "https://blog.naver.com/eunpiri715",
        "note": "5월 27일(수) 오전 11시"
      },
      {
        "name": "손이서",
        "phone": "010-####-7997",
        "blog": "https://blog.naver.com/e-ryang?fromRss=true&trackingCode=rss",
        "note": "27일 11시 방문희망합니다"
      },
      {
        "name": "이현실",
        "phone": "010-####-1463",
        "blog": "https://blog.naver.com/siroo2016?fromRss=true&trackingCode=rss",
        "note": "5월 21일(목) 저녁 7시"
      }
    ]
  },
  {
    "branch": "독학기숙",
    "password": "1234",
    "people": [
      {
        "name": "이중림",
        "phone": "010-####-3417",
        "blog": "https://blog.naver.com/hoshea1?fromRss=true&trackingCode=rss",
        "note": "5월 23일 토 10시 / 평일만 된다면 평일 저녁 가능 합니다."
      },
      {
        "name": "황보람",
        "phone": "010-####-0801",
        "blog": "https://blog.naver.com/qhfka4785",
        "note": "22일 금 오후 2시"
      },
      {
        "name": "문은경",
        "phone": "010-####-6710",
        "blog": "https://blog.naver.com/em2868?fromRss=true&trackingCode=rss",
        "note": "5/21(12시)"
      },
      {
        "name": "남윤진",
        "phone": "010-####-7901",
        "blog": "https://blog.naver.com/jwp3214?fromRss=true&trackingCode=rss",
        "note": "5월 20일 오후 7시"
      }
    ]
  },
  {
    "branch": "천안",
    "password": "1234",
    "people": [
      {
        "name": "안수지",
        "phone": "010-####-0663",
        "blog": "https://blog.naver.com/suzibb",
        "note": "5/21/10시"
      },
      {
        "name": "정해정",
        "phone": "010-####-9876",
        "blog": "https://blog.naver.com/blog_time",
        "note": "5/30 / 11시"
      },
      {
        "name": "고다언",
        "phone": "010-####-2574",
        "blog": "https://blog.naver.com/ggoda621",
        "note": "5/27 / 11시"
      }
    ]
  },
  {
    "branch": "이천기숙",
    "password": "1234",
    "people": [
      {
        "name": "황서영",
        "phone": "010-6294-5134",
        "blog": "https://blog.naver.com/golden291055?fromRss=true&trackingCode=rss",
        "note": "평일 아무때나가능"
      },
      {
        "name": "장민지",
        "phone": "010-7108-4659",
        "blog": "https://blog.naver.com/mzeyo?fromRss=true&trackingCode=rss",
        "note": "5.23 / 5.25 / 5.30 / 5.31  가능합니다."
      },
      {
        "name": "박소은",
        "phone": "010-8423-4149",
        "blog": "https://blog.naver.com/dltmf3292?fromRss=true&trackingCode=rss",
        "note": "5/20/10시"
      }
    ]
  },
  {
    "branch": "춘천",
    "password": "1234",
    "people": [
      {
        "name": "권빈",
        "phone": "010-7703-8537",
        "blog": "http://blog.naver.com/praybin",
        "note": "5월 20일 (수) 오전 11시"
      },
      {
        "name": "김태인",
        "phone": "010-4781-2123",
        "blog": "https://blog.naver.com/taein0208",
        "note": "5월 28일(목) 오후 5시 30분"
      },
      {
        "name": "김문희",
        "phone": "010-3911-8104",
        "blog": "https://blog.naver.com/kmh8104?fromRss=true&trackingCode=rss",
        "note": "5월27일(수) 17시 또는 주말 항시가능"
      }
    ]
  },
  {
    "branch": "안산",
    "password": "1234",
    "people": [
      {
        "name": "양현주",
        "phone": "010-5294-9806",
        "blog": "https://blog.naver.com/yhj88",
        "note": "평일 6시~7시사이에 방문예정"
      },
      {
        "name": "고수경",
        "phone": "010-5043-6237",
        "blog": "https://blog.naver.com/doli177",
        "note": "5/20 수 3시"
      },
      {
        "name": "신혜림",
        "phone": "010-3884-3468",
        "blog": "https://blog.naver.com/hhjjoo_?fromRss=true&trackingCode=rss",
        "note": "5월21일 목요일 10시"
      }
    ]
  },
  {
    "branch": "분당정자",
    "password": "1234",
    "people": [
      {
        "name": "이현지",
        "phone": "010-5658-7193",
        "blog": "https://blog.naver.com/hyun_4231",
        "note": "5월30일 (토) 11시"
      },
      {
        "name": "전서린",
        "phone": "010-4905-9445",
        "blog": "https://blog.naver.com/rvd_romi?fromRss=true&trackingCode=rss",
        "note": "5월 23일 (토) 오전 11시"
      },
      {
        "name": "문혜령",
        "phone": "010-8545-5580",
        "blog": "https://blog.naver.com/mdal2_700",
        "note": "5월 23일(토) 오후1시"
      }
    ]
  },
  {
    "branch": "대치",
    "password": "1234",
    "people": [
      {
        "name": "한하임",
        "phone": "010-8514-8629",
        "blog": "https://blog.naver.com/be-focus",
        "note": "5월21일 오후2시"
      },
      {
        "name": "정하영",
        "phone": "010-6876-7176",
        "blog": "https://blog.naver.com/poolmoon7",
        "note": "5월 22일 금요일 저녁 6시"
      },
      {
        "name": "김다민",
        "phone": "010-8806-0941",
        "blog": "https://blog.naver.com/dxlfz",
        "note": "5월 20일 오후 1시"
      }
    ]
  },
  {
    "branch": "수원시청",
    "password": "1234",
    "people": [
      {
        "name": "윤은주",
        "phone": "010-4662-1719",
        "blog": "https://blog.naver.com/eunjuyaaa",
        "note": "5월 26일 오전 10시 30분"
      },
      {
        "name": "이다빈",
        "phone": "010-5899-5540",
        "blog": "https://blog.naver.com/dakong0921",
        "note": "6월 1일 오후 5시"
      },
      {
        "name": "전서원",
        "phone": "010-7652-0753",
        "blog": "https://blog.naver.com/techno1213?fromRss=true&trackingCode=rss",
        "note": "5월 20일 10시"
      }
    ]
  }
];

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
