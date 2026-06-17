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
    "password": "1324",
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
    "password": "2847",
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
    "password": "5173",
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
    "password": "6408",
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
    "password": "2915",
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
    "password": "8731",
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
    "password": "4629",
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
    "password": "7052",
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
    "password": "3186",
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
    "password": "5541",
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
    "password": "9274",
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
    "password": "1468",
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
    "password": "6835",
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
    "password": "2509",
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
    "password": "7942",
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
    "password": "4317",
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
  },
  {
    "branch": "서울광진",
    "password": "8654",
    "people": [
      {
        "name": "이기동",
        "phone": "010-4811-2334",
        "blog": "http://blog.naver.com/lkd8659",
        "note": "5월 29일 금요일 오후 3시"
      },
      {
        "name": "남희경",
        "phone": "010-4100-3147",
        "blog": "https://blog.naver.com/0331ska",
        "note": "일정조율후방문"
      },
      {
        "name": "조정윤",
        "phone": "010-4090-0822",
        "blog": "https://blog.naver.com/sabbeun?fromRss=true&trackingCode=rss",
        "note": "5월 27일 수요일 오후 6시30분"
      }
    ]
  },
  {
    "branch": "광주북구",
    "password": "1096",
    "people": [
      {
        "name": "박현숙",
        "phone": "010-3612-0463",
        "blog": "https://blog.naver.com/happy0463",
        "note": "5.20 수요일 오후 5시 30분"
      },

      {
        "name": "김수경",
        "phone": "010-9942-1004",
        "blog": "https://blog.naver.com/wannabsoo?fromRss=true&trackingCode=rss",
        "note": "5월 25일 2시방문이요"
      }
    ]
  }
];

const MASTER_BRANCH_PASSWORD = "etoos247!";

// 2025년 (전년 동기) 블로그 체험단 실적 고정 데이터
const LAST_YEAR_DATA = {
  "대치": { contents: 5, views: 1785 },
  "목동": { contents: 5, views: 7535 },
  "목동오목교": { contents: 5, views: 13356 },
  "서울강서": { contents: 5, views: 1221 },
  "분당정자": { contents: 5, views: 1343 },
  "수원시청": { contents: 5, views: 945 },
  "인천송도": { contents: 5, views: 1431 },
  "광주수완": { contents: 5, views: 3470 },
  "광주북구": { contents: 5, views: 2164 },
  "진주": { contents: 4, views: 2458 },
  "이천기숙": { contents: 17, views: 3809 },
  "독학기숙": { contents: 9, views: 5077 }
};
const LAST_YEAR_TOTAL_CONTENTS = 75;
const LAST_YEAR_TOTAL_VIEWS = 44644;
const LAST_YEAR_AVERAGE_VIEWS = 44644 / 75;

let branches = normalizeBranches(sampleBranches);

const branchList = document.querySelector("#branchList");
const branchSearch = document.querySelector("#branchSearch");
const emptyState = document.querySelector("#emptyState");
const detailCard = document.querySelector("#detailCard");
const detailBranch = document.querySelector("#detailBranch");
const peopleList = document.querySelector("#peopleList");
const adminToggle = document.querySelector("#adminToggle");
const adminLogin = document.querySelector("#adminLogin");
const adminPassword = document.querySelector("#adminPassword");
const adminPasswordDialog = document.querySelector("#adminPasswordDialog");
const adminPasswordMessage = document.querySelector("#adminPasswordMessage");
const cancelAdminPassword = document.querySelector("#cancelAdminPassword");
const branchPasswordDialog = document.querySelector("#branchPasswordDialog");
const branchPasswordForm = document.querySelector("#branchPasswordForm");
const passwordDialogTitle = document.querySelector("#passwordDialogTitle");
const branchPasswordInput = document.querySelector("#branchPasswordInput");
const branchPasswordMessage = document.querySelector("#branchPasswordMessage");
const cancelBranchPassword = document.querySelector("#cancelBranchPassword");
const mobileBranchSelect = document.querySelector("#mobileBranchSelect");
const reportMobileCards = document.querySelector("#reportMobileCards");

const landingPageContent = document.querySelector("#landingPageContent");
const heroTotalContents = document.querySelector("#heroTotalContents");
const heroTotalViews = document.querySelector("#heroTotalViews");
const heroTotalLikes = document.querySelector("#heroTotalLikes");
const heroTotalComments = document.querySelector("#heroTotalComments");
const btnGoToSearch = document.querySelector("#btnGoToSearch");
const btnGoToSearch2 = document.querySelector("#btnGoToSearch2");

let selectedBranch = "";
let isAdmin = false;
let adminSessionPassword = "";
let pendingBranch = null;

// Report UI selectors
const detailTabs = document.querySelector("#detailTabs");
const tabContentPeople = document.querySelector("#tabContentPeople");
const tabContentReport = document.querySelector("#tabContentReport");
const reportTableBody = document.querySelector("#reportTableBody");

const kpiContents = document.querySelector("#kpiContents");
const kpiViews = document.querySelector("#kpiViews");
const kpiViewsAvg = document.querySelector("#kpiViewsAvg");
const kpiMobile = document.querySelector("#kpiMobile");
const kpiMobileAvg = document.querySelector("#kpiMobileAvg");
const kpiPc = document.querySelector("#kpiPc");
const kpiPcAvg = document.querySelector("#kpiPcAvg");
const donutPct = document.querySelector("#donutPct");
const lineChartSubtitle = document.querySelector("#lineChartSubtitle");
const reportDateBasis = document.querySelector("#reportDateBasis");

// Chart.js instances
let cumulativeLineChartInstance = null;
let deviceDonutChartInstance = null;
let dailyLineChartInstance = null;

// Admin Dashboard selectors
const adminDashboardPanel = document.querySelector("#adminDashboardPanel");
const workspace = document.querySelector(".workspace");
const closeAdminDashboard = document.querySelector("#closeAdminDashboard");
const navGlobalReportLink = document.querySelector("#navGlobalReportLink");

const globalKpiContents = document.querySelector("#globalKpiContents");
const globalKpiViews = document.querySelector("#globalKpiViews");
const globalKpiViewsAvg = document.querySelector("#globalKpiViewsAvg");

// 비교 모드 셀렉터
const compareModeToggle = document.querySelector("#compareModeToggle");
const compareKpiContentsBadge = document.querySelector("#compareKpiContentsBadge");
const compareKpiViewsBadge = document.querySelector("#compareKpiViewsBadge");
const compareKpiViewsAvgBadge = document.querySelector("#compareKpiViewsAvgBadge");
const compareChartCard = document.querySelector("#compareChartCard");

let compareBarChart = null; // Chart.js 인스턴스 보관용

// ── 체험단 신청 전역 변수 및 셀렉터 ──────────────────────────────
let experienceConfig = null;
let experienceApplications = [];
let countdownInterval = null;

const navExperienceApplyLink = document.querySelector("#navExperienceApplyLink");
const btnGoToApply = document.querySelector("#btnGoToApply");
const btnGoToApply2 = document.querySelector("#btnGoToApply2");
const experienceApplySection = document.querySelector("#experience-apply-section");
const applySectionTitle = document.querySelector("#applySectionTitle");
const infoApplyPeriod = document.querySelector("#infoApplyPeriod");
const infoRunPeriod = document.querySelector("#infoRunPeriod");
const infoBillingMonthText = document.querySelector("#infoBillingMonthText");
const infoMaxQuota = document.querySelector("#infoMaxQuota");
const currentApplyStatus = document.querySelector("#currentApplyStatus");
const applyQuotaCard = document.querySelector("#applyQuotaCard");
const quotaStatusText = document.querySelector("#quotaStatusText");
const quotaProgressBar = document.querySelector("#quotaProgressBar");
const quotaPercentText = document.querySelector("#quotaPercentText");
const calcNum = document.querySelector("#calcNum");
const calcPrice = document.querySelector("#calcPrice");
const calcBillingBasis = document.querySelector("#calcBillingBasis");

// D-Day Countdown Timer Elements
const countdownTargetText = document.querySelector("#countdownTargetText");
const countdownTitle = document.querySelector("#countdownTitle");
const timerDays = document.querySelector("#timerDays");
const timerHours = document.querySelector("#timerHours");
const timerMinutes = document.querySelector("#timerMinutes");
const timerSeconds = document.querySelector("#timerSeconds");
const timerCentiseconds = document.querySelector("#timerCentiseconds");

const ALL_BRANCH_NAMES = [
  "대치", "강북", "노량진", "마포", "목동", "목동오목교", "서울강동", "서울강서", "서울광진", 
  "서울대점", "서울도봉", "서울성동", "서울성북", "서울송파", "은평서대문", "광명", "다산", 
  "김포", "동탄", "부천", "분당정자", "수원시청", "수원영통", "수원정자", "안산", "용인수지", 
  "의정부", "일산동구", "일산서구", "파주", "평택", "하남", "인천부평", "인천송도", "인천인하대", 
  "인천청라", "원주", "춘천", "대전둔산", "천안", "청주", "광주남구", "광주동구", "광주북구", 
  "광주수완", "목포", "익산", "대구달서", "대구수성 1관", "대구수성 2관", "부산교대", "부산대", 
  "부산북구", "부산서면", "부산해운대", "울산남구", "진주", "창원", "제주", "안성기숙", 
  "이천기숙", "독학기숙"
];

const experienceApplyForm = document.querySelector("#experienceApplyForm");
const applyBranchInput = document.querySelector("#applyBranchInput");
const applyBranchSuggestions = document.querySelector("#applyBranchSuggestions");
const applyCount = document.querySelector("#applyCount");
const applyAgree = document.querySelector("#applyAgree");
const applyErrorMessage = document.querySelector("#applyErrorMessage");
const applySuccessMessage = document.querySelector("#applySuccessMessage");
const btnSubmitApply = document.querySelector("#btnSubmitApply");

const adminExperienceManagement = document.querySelector("#adminExperienceManagement");
const adminExperienceTableBody = document.querySelector("#adminExperienceTableBody");
const adminExperienceEmpty = document.querySelector("#adminExperienceEmpty");
const adminExperienceConfigForm = document.querySelector("#adminExperienceConfigForm");
const configVisible = document.querySelector("#configVisible");
const configName = document.querySelector("#configName");
const configApplyStart = document.querySelector("#configApplyStart");
const configApplyEnd = document.querySelector("#configApplyEnd");
const configRunStart = document.querySelector("#configRunStart");
const configRunEnd = document.querySelector("#configRunEnd");
const configMaxQuota = document.querySelector("#configMaxQuota");
const configBillingMonth = document.querySelector("#configBillingMonth");
const adminConfigMessage = document.querySelector("#adminConfigMessage");
const btnExportExperienceExcel = document.querySelector("#btnExportExperienceExcel");
// ──────────────────────────────────────────────────────────────

const leaderboardTableBody = document.querySelector("#leaderboardTableBody");
const hallOfFameList = document.querySelector("#hallOfFameList");
const globalKeywordList = document.querySelector("#globalKeywordList");

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

  populateMobileSelect();
}

function populateMobileSelect() {
  if (!mobileBranchSelect) return;
  const prevValue = mobileBranchSelect.value || selectedBranch;
  mobileBranchSelect.innerHTML = '<option value="">지점을 선택하세요</option>';

  const sorted = [...branches].sort((first, second) => first.branch.localeCompare(second.branch, "ko"));
  sorted.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.branch;
    option.textContent = item.branch;
    if (item.branch === prevValue) {
      option.selected = true;
    }
    mobileBranchSelect.append(option);
  });
}

function requestBranchPassword(item) {
  // 관리자 모드: 비밀번호 입력 없이 즉시 지점 정보 열람
  if (isAdmin) {
    showLandingView();
    selectBranch(item);
    return;
  }

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

  // Check if report data exists for this branch
  const hasReport = window.reportsData && window.reportsData[item.branch];
  if (hasReport) {
    detailTabs.classList.remove("hidden");
    // Switch to report tab first
    switchTab("report");
    renderReportDashboard(item.branch);
  } else {
    detailTabs.classList.add("hidden");
    switchTab("people");
  }
}

function switchTab(tabId) {
  const tabs = document.querySelectorAll(".tab-btn");

  tabs.forEach(tab => {
    if (tab.getAttribute("data-tab") === tabId) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  if (tabId === "people") {
    tabContentPeople.classList.add("active");
    tabContentPeople.classList.remove("hidden");
    tabContentReport.classList.remove("active");
    tabContentReport.classList.add("hidden");
  } else {
    tabContentPeople.classList.remove("active");
    tabContentPeople.classList.add("hidden");
    tabContentReport.classList.add("active");
    tabContentReport.classList.remove("hidden");
    
    // Trigger charts update/resize when report tab is unhidden
    setTimeout(() => {
      if (cumulativeLineChartInstance) cumulativeLineChartInstance.resize();
      if (deviceDonutChartInstance) deviceDonutChartInstance.resize();
      if (dailyLineChartInstance) dailyLineChartInstance.resize();
    }, 50);
  }
}

function renderReportDashboard(branchName) {
  const report = window.reportsData[branchName];
  if (!report) return;

  // 1. Set KPI values
  kpiContents.textContent = `${report.totalContents}개`;
  kpiViews.textContent = report.totalViews.toLocaleString();
  kpiViewsAvg.textContent = report.averageViews.toLocaleString();
  kpiMobile.textContent = report.mobileViews.toLocaleString();
  kpiMobileAvg.textContent = report.averageMobileViews.toLocaleString();
  kpiPc.textContent = report.pcViews.toLocaleString();
  kpiPcAvg.textContent = report.averagePcViews.toLocaleString();
  
  donutPct.textContent = `${report.mobileRatio}%`;

  // Set subtitles/basis text based on date range
  if (report.dailyData && report.dailyData.length > 0) {
    const startDate = report.dailyData[0].date.replace(/-/g, '.');
    const endDate = report.dailyData[report.dailyData.length - 1].date.replace(/-/g, '.');
    reportDateBasis.textContent = `누적 성과 및 콘텐츠 평균 성과 (기준일: ${endDate})`;
    lineChartSubtitle.textContent = `(${startDate} ~ ${endDate})`;
  } else {
    reportDateBasis.textContent = `누적 성과 및 콘텐츠 평균 성과`;
    lineChartSubtitle.textContent = '';
  }

  // 2. Render Content Table
  reportTableBody.innerHTML = "";
  if (reportMobileCards) {
    reportMobileCards.innerHTML = "";
  }

  report.contents.forEach((content, index) => {
    const tr = document.createElement("tr");
    
    // When clicking a row, open the URL in a new tab if present
    if (content.url) {
      tr.addEventListener("click", () => {
        window.open(content.url, "_blank", "noopener,noreferrer");
      });
    } else {
      tr.style.cursor = "default";
    }

    const tdNum = document.createElement("td");
    tdNum.className = "col-num";
    tdNum.textContent = index + 1;

    const tdTitle = document.createElement("td");
    tdTitle.className = "col-title";
    
    const infoCell = document.createElement("div");
    infoCell.className = "content-info-cell";
    
    const titleSpan = document.createElement("span");
    titleSpan.className = "content-main-title";
    titleSpan.textContent = content.title;
    
    const metaDiv = document.createElement("div");
    metaDiv.className = "content-meta";
    
    const bloggerSpan = document.createElement("span");
    bloggerSpan.textContent = content.blogger;
    
    const dateSpan = document.createElement("span");
    dateSpan.textContent = content.date.replace(/-/g, '.');
    
    metaDiv.append(bloggerSpan);
    metaDiv.append(createMetaDivider());
    metaDiv.append(dateSpan);
    
    if (content.url) {
      metaDiv.append(createMetaDivider());
      const badge = document.createElement("span");
      badge.className = "visit-badge";
      badge.innerHTML = `
        <span>블로그 방문</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      `;
      metaDiv.append(badge);
    }
    
    infoCell.append(titleSpan, metaDiv);
    tdTitle.append(infoCell);

    const tdLikes = document.createElement("td");
    tdLikes.className = "col-likes";
    tdLikes.textContent = content.likes;

    const tdComments = document.createElement("td");
    tdComments.className = "col-comments";
    tdComments.textContent = content.comments;

    tr.append(tdNum, tdTitle, tdLikes, tdComments);
    reportTableBody.append(tr);

    // Render mobile card
    if (reportMobileCards) {
      const card = document.createElement("div");
      card.className = "report-mobile-card";
      
      if (content.url) {
        card.addEventListener("click", () => {
          window.open(content.url, "_blank", "noopener,noreferrer");
        });
      } else {
        card.style.cursor = "default";
      }

      const cardHead = document.createElement("div");
      cardHead.className = "card-head";
      cardHead.innerHTML = `
        <span class="card-num">${index + 1}</span>
        <span class="card-blogger">${content.blogger}</span>
        <span class="card-date">${content.date.replace(/-/g, '.')}</span>
      `;

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";
      cardBody.innerHTML = `<h4 class="card-title">${content.title}</h4>`;

      const cardFoot = document.createElement("div");
      cardFoot.className = "card-foot";

      const stats = document.createElement("div");
      stats.className = "card-stats";
      stats.innerHTML = `
        <span class="stat-item likes">좋아요 <strong>${content.likes}</strong></span>
        <span class="stat-item comments">댓글 <strong>${content.comments}</strong></span>
      `;
      cardFoot.append(stats);

      if (content.url) {
        const visitBtn = document.createElement("span");
        visitBtn.className = "card-visit-btn";
        visitBtn.innerHTML = `
          <span>블로그 방문</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        `;
        cardFoot.append(visitBtn);
      }

      card.append(cardHead, cardBody, cardFoot);
      reportMobileCards.append(card);
    }
  });

  // 3. Render Charts
  renderCharts(report);

  // 4. Render Keywords
  const reportExposedCard = document.querySelector("#reportExposedCard");
  const reportExposedList = document.querySelector("#reportExposedList");
  const reportInflowCard = document.querySelector("#reportInflowCard");
  const reportInflowList = document.querySelector("#reportInflowList");
  
  if (reportExposedCard && reportExposedList) {
    if (report.exposedKeywords && report.exposedKeywords.length > 0) {
      reportExposedCard.classList.remove("hidden");
      renderKeywordListHelper(reportExposedList, report.exposedKeywords);
    } else {
      reportExposedCard.classList.add("hidden");
    }
  }
  
  if (reportInflowCard && reportInflowList) {
    if (report.inflowKeywords && report.inflowKeywords.length > 0) {
      reportInflowCard.classList.remove("hidden");
      renderKeywordListHelper(reportInflowList, report.inflowKeywords);
    } else {
      reportInflowCard.classList.add("hidden");
    }
  }
  
  // Hide parent keywords-row container if both are empty/hidden
  const keywordsRow = document.querySelector(".keywords-row");
  if (keywordsRow) {
    const hasExposed = report.exposedKeywords && report.exposedKeywords.length > 0;
    const hasInflow = report.inflowKeywords && report.inflowKeywords.length > 0;
    if (!hasExposed && !hasInflow) {
      keywordsRow.classList.add("hidden");
    } else {
      keywordsRow.classList.remove("hidden");
      
      // If one of them is empty, let the other take full width on desktop
      if (reportExposedCard) {
        if (!hasInflow) {
          reportExposedCard.style.gridColumn = "1 / span 2";
        } else {
          reportExposedCard.style.gridColumn = "";
        }
      }
      if (reportInflowCard) {
        if (!hasExposed) {
          reportInflowCard.style.gridColumn = "1 / span 2";
        } else {
          reportInflowCard.style.gridColumn = "";
        }
      }
    }
  }
}

function renderKeywordListHelper(listContainer, keywords) {
  listContainer.innerHTML = "";
  if (!keywords || keywords.length === 0) {
    const emptyRow = document.createElement("div");
    emptyRow.className = "no-result";
    emptyRow.textContent = "데이터가 없습니다.";
    listContainer.append(emptyRow);
    return;
  }

  keywords.forEach((kw) => {
    const item = document.createElement("div");
    item.className = "keyword-item";
    
    const rankName = document.createElement("div");
    rankName.className = "keyword-rank-name";
    
    const rankSpan = document.createElement("span");
    let rankClass = "rank-other";
    if (kw.rank === 1) rankClass = "rank-1";
    else if (kw.rank === 2) rankClass = "rank-2";
    else if (kw.rank === 3) rankClass = "rank-3";
    
    rankSpan.className = `keyword-rank ${rankClass}`;
    rankSpan.textContent = kw.rank;
    
    const nameSpan = document.createElement("span");
    nameSpan.className = "keyword-name";
    nameSpan.textContent = kw.keyword;
    
    rankName.append(rankSpan, nameSpan);
    
    const valueSpan = document.createElement("span");
    const match = kw.value.match(/^([\d.,]+)(.*)$/);
    if (match) {
      let rankValClass = "val-other";
      if (kw.rank === 1) rankValClass = "val-1";
      else if (kw.rank === 2 || kw.rank === 3) rankValClass = "val-2";
      valueSpan.className = `keyword-value ${rankValClass}`;
      valueSpan.innerHTML = `<span class="val-num">${match[1]}</span><span class="val-unit">${match[2]}</span>`;
    } else {
      let rankValClass = "val-other";
      if (kw.rank === 1) rankValClass = "val-1";
      else if (kw.rank === 2 || kw.rank === 3) rankValClass = "val-2";
      valueSpan.className = `keyword-value ${rankValClass}`;
      valueSpan.textContent = kw.value;
    }
    
    item.append(rankName, valueSpan);
    listContainer.append(item);
  });
}

function createMetaDivider() {
  const span = document.createElement("span");
  span.className = "meta-divider";
  span.textContent = "|";
  return span;
}

function renderCharts(report) {
  // Destroy previous instances if they exist
  if (cumulativeLineChartInstance) {
    cumulativeLineChartInstance.destroy();
  }
  if (deviceDonutChartInstance) {
    deviceDonutChartInstance.destroy();
  }
  if (dailyLineChartInstance) {
    dailyLineChartInstance.destroy();
  }

  // Common font styling
  const fontConfig = {
    family: "'Outfit', 'Noto Sans KR', sans-serif",
    size: 11,
    weight: '600'
  };

  // Extract chart data
  const dates = report.dailyData.map(d => d.date.substring(5).replace('-', '.'));
  const pcViews = report.dailyData.map(d => d.pc);
  const mobileViews = report.dailyData.map(d => d.mobile);
  const totalViews = report.dailyData.map(d => d.total);

  // Cumulative views arrays
  let cumTotal = 0;
  let cumMobile = 0;
  let cumPc = 0;
  const cumulativeTotals = [];
  const cumulativeMobiles = [];
  const cumulativePcs = [];

  report.dailyData.forEach(d => {
    cumTotal += d.total;
    cumMobile += d.mobile;
    cumPc += d.pc;
    cumulativeTotals.push(cumTotal);
    cumulativeMobiles.push(cumMobile);
    cumulativePcs.push(cumPc);
  });

  // A. Cumulative Line Chart
  const ctxCum = document.getElementById('cumulativeLineChart').getContext('2d');
  cumulativeLineChartInstance = new Chart(ctxCum, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        {
          label: '총조회수',
          data: cumulativeTotals,
          borderColor: '#5f19e8',
          backgroundColor: 'transparent',
          borderWidth: 3,
          pointRadius: 0,
          pointHoverRadius: 6,
          tension: 0.3
        },
        {
          label: '모바일조회수',
          data: cumulativeMobiles,
          borderColor: '#a855f7',
          backgroundColor: 'transparent',
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 5,
          tension: 0.3
        },
        {
          label: 'PC조회수',
          data: cumulativePcs,
          borderColor: '#6366f1',
          backgroundColor: 'transparent',
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 5,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          align: 'end',
          labels: { font: fontConfig, boxWidth: 8, usePointStyle: true, padding: 15 }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          titleFont: { family: fontConfig.family, weight: '700' },
          bodyFont: { family: fontConfig.family }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: fontConfig, color: '#94a3b8', maxTicksLimit: 10 }
        },
        y: {
          border: { dash: [4, 4] },
          grid: { color: '#e2e8f0' },
          ticks: { font: fontConfig, color: '#94a3b8' }
        }
      }
    }
  });

  // B. Device Donut Chart
  const ctxDonut = document.getElementById('deviceDonutChart').getContext('2d');
  deviceDonutChartInstance = new Chart(ctxDonut, {
    type: 'doughnut',
    data: {
      labels: ['모바일', 'PC'],
      datasets: [{
        data: [report.mobileRatio, report.pcRatio],
        backgroundColor: ['#5f19e8', '#cbd5e1'],
        borderWidth: 0,
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '76%',
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return ` ${context.label}: ${context.raw}%`;
            }
          }
        }
      }
    }
  });

  // C. Daily Line Chart
  const ctxDaily = document.getElementById('dailyLineChart').getContext('2d');
  dailyLineChartInstance = new Chart(ctxDaily, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        {
          label: '총조회수',
          data: totalViews,
          borderColor: '#10b981',
          backgroundColor: 'transparent',
          borderWidth: 2.5,
          pointRadius: 2,
          pointHoverRadius: 6,
          tension: 0.3
        },
        {
          label: '모바일조회수',
          data: mobileViews,
          borderColor: '#a855f7',
          backgroundColor: 'transparent',
          borderWidth: 1.5,
          pointRadius: 0,
          pointHoverRadius: 5,
          tension: 0.3
        },
        {
          label: 'PC조회수',
          data: pcViews,
          borderColor: '#6366f1',
          backgroundColor: 'transparent',
          borderWidth: 1.5,
          pointRadius: 0,
          pointHoverRadius: 5,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          align: 'end',
          labels: { font: fontConfig, boxWidth: 8, usePointStyle: true, padding: 15 }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          titleFont: { family: fontConfig.family, weight: '700' },
          bodyFont: { family: fontConfig.family }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: fontConfig, color: '#94a3b8', maxTicksLimit: 12 }
        },
        y: {
          border: { dash: [4, 4] },
          grid: { color: '#e2e8f0' },
          ticks: { font: fontConfig, color: '#94a3b8' }
        }
      }
    }
  });
}

function renderPeople(people) {
  peopleList.innerHTML = "";

  const track = document.createElement("div");
  track.className = "people-marquee-track";

  people.forEach((person, index) => {
    const card = document.createElement("section");
    card.className = "person-card";
    card.style.setProperty("--card-index", index);

    const title = document.createElement("h3");
    title.innerHTML = `<span class="num">${index + 1}</span> <span>${person.name}</span>`;

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
        copyButton.setAttribute("data-phone", value);
        copyButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" class="copy-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m-2 4H10" />
          </svg>
          <span>복사</span>
        `;

        copyRow.append(phoneText, copyButton);
        description.append(copyRow);
      } else if (label === "블로그주소" && value) {
        const link = document.createElement("a");
        link.href = normalizeUrl(value);
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.innerHTML = `
          <span>블로그 방문</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" class="link-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        `;
        description.append(link);
      } else {
        description.textContent = value || "-";
      }

      row.append(term, description);
      infoList.append(row);
    });

    card.append(title, infoList);
    track.append(card);
  });

  peopleList.append(track);
}

async function copyPhone(phone, button) {
  try {
    await navigator.clipboard.writeText(phone);
    button.classList.add("copied");
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" class="copy-icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span>복사됨</span>
    `;
    window.setTimeout(() => {
      button.classList.remove("copied");
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" class="copy-icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m-2 4H10" />
        </svg>
        <span>복사</span>
      `;
    }, 1400);
  } catch {
    button.innerHTML = `<span>실패</span>`;
    window.setTimeout(() => {
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" class="copy-icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m-2 4H10" />
        </svg>
        <span>복사</span>
      `;
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

// ── 뷰 전환 헬퍼 함수 ─────────────────────────────────────────
// 종합보고서 패널을 표시하고 일반 랜딩 콘텐츠를 숨깁니다.
function showGlobalReportView() {
  if (adminDashboardPanel) adminDashboardPanel.classList.remove("hidden");
  if (landingPageContent) landingPageContent.classList.add("hidden");
  renderGlobalDashboard();
}

// 일반 랜딩 콘텐츠를 표시하고 종합보고서 패널을 숨깁니다.
function showLandingView() {
  if (adminDashboardPanel) adminDashboardPanel.classList.add("hidden");
  if (landingPageContent) landingPageContent.classList.remove("hidden");
}
// ──────────────────────────────────────────────────────────────

function updateAdminState() {
  // 종합보고서 네비게이션 링크 노출 제어
  if (navGlobalReportLink) {
    navGlobalReportLink.classList.toggle("hidden", !isAdmin);
  }

  // 뷰 전환: 관리자 로그인 시 종합보고서 뷰, 로그아웃 시 랜딩 뷰
  if (isAdmin) {
    showGlobalReportView();
  } else {
    showLandingView();
  }

  const adminToggleSpan = adminToggle.querySelector("span:last-child");
  if (adminToggleSpan) {
    adminToggleSpan.textContent = isAdmin ? "지점 모드 전환" : "관리자 모드";
  }

  const lockIconWrapper = adminToggle.querySelector(".lock-icon-wrapper");
  if (lockIconWrapper) {
    lockIconWrapper.innerHTML = isAdmin
      ? `<svg class="lock-icon open" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
         </svg>`
      : `<svg class="lock-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
         </svg>`;
  }

  const userBadge = document.querySelector("#userBadge");
  if (userBadge) {
    const avatar = userBadge.querySelector(".avatar-circle");
    const name = userBadge.querySelector(".user-name");
    if (avatar && name) {
      avatar.textContent = isAdmin ? "HQ" : "G";
      name.textContent = isAdmin ? "HQ 본사 관리자" : "GUEST 지점 사용자";
    }
  }

  adminPassword.value = "";
  
  if (typeof renderExperienceUI === "function") {
    renderExperienceUI();
  }
}

function clearSelectedBranch() {
  selectedBranch = "";
  if (mobileBranchSelect) {
    mobileBranchSelect.value = "";
  }
  detailCard.classList.add("hidden");
  emptyState.classList.remove("hidden");
  peopleList.innerHTML = "";
  detailBranch.textContent = "";
}

function closeBranchPasswordDialog() {
  pendingBranch = null;
  branchPasswordInput.value = "";
  branchPasswordMessage.textContent = "";
  if (mobileBranchSelect) {
    mobileBranchSelect.value = selectedBranch;
  }

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

peopleList.addEventListener("click", (event) => {
  const copyButton = event.target.closest(".copy-button");
  if (copyButton) {
    const phone = copyButton.getAttribute("data-phone");
    if (phone) {
      copyPhone(phone, copyButton);
    }
  }
});

adminToggle.addEventListener("click", () => {
  if (isAdmin) {
    isAdmin = false;
    adminSessionPassword = "";
    updateAdminState();
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

  if (branchPasswordInput.value !== pendingBranch.password && branchPasswordInput.value !== MASTER_BRANCH_PASSWORD) {
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

// Excel upload event handlers removed as requested

// Add event listeners for tab buttons
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    switchTab(btn.getAttribute("data-tab"));
  });
});

// Mobile dropdown selection event
if (mobileBranchSelect) {
  mobileBranchSelect.addEventListener("change", (event) => {
    const branchName = event.target.value;
    if (!branchName) {
      clearSelectedBranch();
      return;
    }
    const item = branches.find((b) => b.branch === branchName);
    if (item) {
      requestBranchPassword(item);
    }
  });
}

// Close admin dashboard button (로그아웃 없이 단순 뷰 전환)
if (closeAdminDashboard) {
  closeAdminDashboard.addEventListener("click", () => {
    showLandingView();
  });
}

// 전년 동기 비교 모드 토글 이벤트 등록
if (compareModeToggle) {
  compareModeToggle.addEventListener("change", () => {
    renderGlobalDashboard();
  });
}

// 종합보고서 네비게이션 링크: 클릭 시 종합보고서 뷰로 전환
if (navGlobalReportLink) {
  navGlobalReportLink.addEventListener("click", (e) => {
    e.preventDefault();
    showGlobalReportView();
  });
}

// 일반 네비게이션 링크: 관리자 모드 중 클릭 시 랜딩 뷰로 전환
document.querySelectorAll(".nav-center .nav-menu-link:not(#navGlobalReportLink)").forEach(link => {
  link.addEventListener("click", () => {
    if (isAdmin) {
      showLandingView();
    }
  });
});

// Helper function to escape HTML
function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Admin Dashboard data calculations
function calculateGlobalMetrics() {
  if (!window.reportsData) return null;

  let totalContents = 0;
  let totalViews = 0;
  let totalMobileViews = 0;

  const branchLeaderboard = [];
  const allContents = [];
  const keywordMap = {};

  for (const [branchName, report] of Object.entries(window.reportsData)) {
    totalContents += report.totalContents || 0;
    totalViews += report.totalViews || 0;
    totalMobileViews += report.mobileViews || 0;

    branchLeaderboard.push({
      name: branchName,
      totalViews: report.totalViews || 0,
      totalContents: report.totalContents || 0,
      averageViews: report.averageViews || 0,
      mobileRatio: report.mobileRatio || 0
    });

    if (Array.isArray(report.contents)) {
      report.contents.forEach(content => {
        allContents.push({
          ...content,
          branch: branchName
        });
      });
    }

    if (Array.isArray(report.exposedKeywords)) {
      report.exposedKeywords.forEach(kw => {
        if (kw.keyword) {
          const name = kw.keyword.trim();
          const count = parseFloat(String(kw.value).replace(/[^0-9.]/g, '')) || 0;
          keywordMap[name] = (keywordMap[name] || 0) + count;
        }
      });
    }
  }

  branchLeaderboard.sort((a, b) => b.totalViews - a.totalViews);

  allContents.sort((a, b) => {
    if (b.likes !== a.likes) {
      return b.likes - a.likes;
    }
    return b.comments - a.comments;
  });

  const topContents = allContents.slice(0, 30);

  const sortedKeywords = Object.entries(keywordMap)
    .map(([keyword, value]) => ({ keyword, value }))
    .sort((a, b) => b.value - a.value);

  const topKeywords = sortedKeywords.slice(0, 10);

  const averageViews = totalContents > 0 ? Math.round(totalViews / totalContents) : 0;
  const globalMobileRatio = totalViews > 0 ? Math.round((totalMobileViews / totalViews) * 100) : 0;

  return {
    totalContents,
    totalViews,
    averageViews,
    globalMobileRatio,
    leaderboard: branchLeaderboard,
    topContents,
    topKeywords
  };
}

// 전년 vs 올해 비교 멀티 바 차트 렌더링 함수
function renderCompareBarChart(currentLeaderboard) {
  const ctx = document.getElementById("compareBarChart");
  if (!ctx) return;

  if (compareBarChart) {
    compareBarChart.destroy();
  }

  const branchesToCompare = Object.keys(LAST_YEAR_DATA);
  
  // 2025 전년 데이터
  const lastYearViews = branchesToCompare.map(bName => LAST_YEAR_DATA[bName].views);

  // 2026 올해 데이터 (X축 지점명에 매핑)
  const thisYearViews = branchesToCompare.map(bName => {
    const current = currentLeaderboard.find(item => item.name === bName);
    return current ? current.totalViews : 0;
  });

  compareBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: branchesToCompare,
      datasets: [
        {
          label: '2025년 (전년 동기)',
          data: lastYearViews,
          backgroundColor: 'rgba(100, 116, 139, 0.45)', // 차분한 그레이
          borderColor: 'rgba(100, 116, 139, 0.7)',
          borderWidth: 1,
          borderRadius: 4
        },
        {
          label: '2026년 (올해)',
          data: thisYearViews,
          backgroundColor: 'rgba(95, 25, 232, 0.85)', // var(--accent)
          borderColor: 'rgba(95, 25, 232, 1)',
          borderWidth: 1,
          borderRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: '#94a3b8',
            font: { family: 'Outfit, Noto Sans KR', weight: '700' }
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: 'rgba(15, 13, 45, 0.95)',
          titleFont: { family: 'Outfit, Noto Sans KR', weight: '700' },
          bodyFont: { family: 'Outfit, Noto Sans KR' },
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: ${context.raw.toLocaleString()}회`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            color: '#94a3b8',
            font: { family: 'Outfit, Noto Sans KR', size: 10, weight: '700' }
          }
        },
        y: {
          grid: { color: 'rgba(15, 23, 42, 0.05)' },
          ticks: {
            color: '#94a3b8',
            font: { family: 'Outfit, Noto Sans KR', size: 10 }
          }
        }
      }
    }
  });
}

function renderGlobalDashboard() {
  const metrics = calculateGlobalMetrics();
  if (!metrics) return;

  if (globalKpiContents) globalKpiContents.textContent = `${metrics.totalContents}개`;
  if (globalKpiViews) globalKpiViews.textContent = metrics.totalViews.toLocaleString();
  if (globalKpiViewsAvg) globalKpiViewsAvg.textContent = metrics.averageViews.toLocaleString();

  // 비교 모드 동작 상태 취득
  const showCompare = compareModeToggle && compareModeToggle.checked;
  const compareCols = document.querySelectorAll(".compare-col");

  if (showCompare) {
    // 1. KPI 카드별 전년 동기 대비 증감률(%) 계산 및 배지 렌더링
    // 콘텐츠 수
    const contentsDiffPct = ((metrics.totalContents - LAST_YEAR_TOTAL_CONTENTS) / LAST_YEAR_TOTAL_CONTENTS) * 100;
    if (compareKpiContentsBadge) {
      compareKpiContentsBadge.textContent = contentsDiffPct >= 0 ? `▲${contentsDiffPct.toFixed(1)}%` : `▼${Math.abs(contentsDiffPct).toFixed(1)}%`;
      compareKpiContentsBadge.className = "compare-badge " + (contentsDiffPct >= 0 ? "plus" : "minus");
      compareKpiContentsBadge.classList.remove("hidden");
    }
    // 총 누적 조회수
    const viewsDiffPct = ((metrics.totalViews - LAST_YEAR_TOTAL_VIEWS) / LAST_YEAR_TOTAL_VIEWS) * 100;
    if (compareKpiViewsBadge) {
      compareKpiViewsBadge.textContent = viewsDiffPct >= 0 ? `▲${viewsDiffPct.toFixed(1)}%` : `▼${Math.abs(viewsDiffPct).toFixed(1)}%`;
      compareKpiViewsBadge.className = "compare-badge " + (viewsDiffPct >= 0 ? "plus" : "minus");
      compareKpiViewsBadge.classList.remove("hidden");
    }
    // 평균 조회수
    const avgViewsDiffPct = ((metrics.averageViews - LAST_YEAR_AVERAGE_VIEWS) / LAST_YEAR_AVERAGE_VIEWS) * 100;
    if (compareKpiViewsAvgBadge) {
      compareKpiViewsAvgBadge.textContent = avgViewsDiffPct >= 0 ? `▲${avgViewsDiffPct.toFixed(1)}%` : `▼${Math.abs(avgViewsDiffPct).toFixed(1)}%`;
      compareKpiViewsAvgBadge.className = "compare-badge " + (avgViewsDiffPct >= 0 ? "plus" : "minus");
      compareKpiViewsAvgBadge.classList.remove("hidden");
    }

    // 2. 리더보드 테이블 전년 대비 컬럼 헤더 노출
    compareCols.forEach(el => el.classList.remove("hidden"));

    // 3. 전년 vs 올해 성과 비교 차트 생성
    if (compareChartCard) {
      compareChartCard.classList.remove("hidden");
      renderCompareBarChart(metrics.leaderboard);
    }
  } else {
    // 비교 모드 비활성화(OFF) 시 리셋
    if (compareKpiContentsBadge) compareKpiContentsBadge.classList.add("hidden");
    if (compareKpiViewsBadge) compareKpiViewsBadge.classList.add("hidden");
    if (compareKpiViewsAvgBadge) compareKpiViewsAvgBadge.classList.add("hidden");

    compareCols.forEach(el => el.classList.add("hidden"));

    if (compareChartCard) {
      compareChartCard.classList.add("hidden");
    }
    if (compareBarChart) {
      compareBarChart.destroy();
      compareBarChart = null;
    }
  }

  if (leaderboardTableBody) {
    leaderboardTableBody.innerHTML = "";
    metrics.leaderboard.forEach((item, index) => {
      const tr = document.createElement("tr");
      
      tr.addEventListener("click", () => {
        const branchItem = branches.find(b => b.branch === item.name);
        if (branchItem) {
          isAdmin = false;
          updateAdminState();
          selectBranch(branchItem);
        }
      });

      const tdRank = document.createElement("td");
      tdRank.className = "col-rank";
      tdRank.textContent = index + 1;

      const tdBranch = document.createElement("td");
      tdBranch.className = "col-branch";
      tdBranch.textContent = item.name;

      const tdViews = document.createElement("td");
      tdViews.className = "col-views";
      tdViews.textContent = item.totalViews.toLocaleString();

      const tdCount = document.createElement("td");
      tdCount.className = "col-count";
      tdCount.textContent = `${item.totalContents}개`;

      const tdAvg = document.createElement("td");
      tdAvg.className = "col-avg";
      tdAvg.textContent = item.averageViews.toLocaleString();

      if (showCompare) {
        const tdCompare = document.createElement("td");
        tdCompare.className = "col-compare compare-col";
        const lyBranch = LAST_YEAR_DATA[item.name];
        if (lyBranch) {
          const diff = item.totalViews - lyBranch.views;
          if (diff > 0) {
            tdCompare.textContent = `▲ ${diff.toLocaleString()}`;
            tdCompare.className = "col-compare compare-col plus";
          } else if (diff < 0) {
            tdCompare.textContent = `▼ ${Math.abs(diff).toLocaleString()}`;
            tdCompare.className = "col-compare compare-col minus";
          } else {
            tdCompare.textContent = "0";
            tdCompare.className = "col-compare compare-col zero";
          }
        } else {
          tdCompare.textContent = "New";
          tdCompare.style.color = "var(--accent)";
        }
        tr.append(tdRank, tdBranch, tdViews, tdCount, tdAvg, tdCompare);
      } else {
        tr.append(tdRank, tdBranch, tdViews, tdCount, tdAvg);
      }

      leaderboardTableBody.append(tr);
    });
  }

  if (hallOfFameList) {
    hallOfFameList.innerHTML = "";
    metrics.topContents.slice(0, 7).forEach((content, index) => {
      const fameItem = document.createElement("div");
      fameItem.className = "fame-item";
      
      if (content.url) {
        fameItem.addEventListener("click", () => {
          window.open(content.url, "_blank", "noopener,noreferrer");
        });
      } else {
        fameItem.style.cursor = "default";
      }

      const rankClass = `rank-${index + 1}`;
      fameItem.innerHTML = `
        <div class="fame-badge ${rankClass}">${index + 1}</div>
        <div class="fame-info">
          <h5 class="fame-title">${escapeHtml(content.title)}</h5>
          <div class="fame-meta">
            <span class="campus">${escapeHtml(content.branch)}</span>
            <span class="meta-divider">|</span>
            <span>${escapeHtml(content.blogger)}</span>
            <span class="meta-divider">|</span>
            <span>${content.date.replace(/-/g, '.')}</span>
          </div>
        </div>
        <div class="fame-value">${content.likes}<span>공감</span></div>
      `;
      hallOfFameList.append(fameItem);
    });
  }

  if (globalKeywordList) {
    const formattedKeywords = metrics.topKeywords.map((kw, index) => ({
      rank: index + 1,
      keyword: kw.keyword,
      value: `${kw.value}건`
    }));
    renderKeywordListHelper(globalKeywordList, formattedKeywords);
  }
}

updateAdminState();
loadBranches();
initGlobalHeroStats();
initFameMarquee();
initCtaButtons();
initNavScroll();
if (typeof initExperience === "function") {
  initExperience();
}

function initGlobalHeroStats() {
  if (heroTotalContents) heroTotalContents.textContent = "668";
  if (heroTotalViews) heroTotalViews.textContent = "876.4K";
  if (heroTotalLikes) heroTotalLikes.textContent = "8.6K";
  if (heroTotalComments) heroTotalComments.textContent = "1.4K";

  const setupHoverDetail = (elem, abbreviatedVal, detailedVal) => {
    if (!elem) return;
    const parentCard = elem.closest(".highlight-card");
    if (!parentCard) return;

    parentCard.addEventListener("mouseenter", () => {
      elem.textContent = detailedVal;
    });
    parentCard.addEventListener("mouseleave", () => {
      elem.textContent = abbreviatedVal;
    });
  };

  setupHoverDetail(heroTotalViews, "876.4K", "876,433");
  setupHoverDetail(heroTotalLikes, "8.6K", "8,634");
  setupHoverDetail(heroTotalComments, "1.4K", "1,433");
}

function initFameMarquee() {
  const track1 = document.querySelector("#fameMarqueeTrack1");
  const track2 = document.querySelector("#fameMarqueeTrack2");
  const track3 = document.querySelector("#fameMarqueeTrack3");
  if (!track1 || !track2 || !track3) return;

  track1.innerHTML = "";
  track2.innerHTML = "";
  track3.innerHTML = "";

  const metrics = calculateGlobalMetrics();
  if (!metrics || !Array.isArray(metrics.topContents) || metrics.topContents.length === 0) return;

  function getTrackList(arr, startIdx, count) {
    const list = arr.slice(startIdx, startIdx + count);
    if (list.length === count) return list;

    const mainList = arr.slice(0, count);
    if (mainList.length === 0) return [];

    const needed = count - list.length;
    const padding = [];
    for (let i = 0; i < needed; i++) {
      padding.push(mainList[i % mainList.length]);
    }
    return [...list, ...padding];
  }

  const list1 = getTrackList(metrics.topContents, 0, 7);
  const list2 = getTrackList(metrics.topContents, 7, 7);
  const list3 = getTrackList(metrics.topContents, 14, 7);

  const populateTrack = (track, contentsList) => {
    contentsList.forEach((content) => {
      const card = document.createElement("div");
      card.className = "fame-card";
      
      if (content.url) {
        card.onclick = () => {
          window.open(content.url, "_blank", "noopener,noreferrer");
        };
      }

      const titleText = content.title || "체험단 리뷰";
      const bloggerText = content.blogger || "인플루언서";
      const branchText = content.branch || "이투스247";
      const likesCount = content.likes || 0;

      const stars = "★".repeat(5);

      card.innerHTML = `
        <div class="fame-card-header">
          <div class="fame-card-profile">
            <div class="fame-card-avatar">${bloggerText.slice(0, 1)}</div>
            <span class="fame-card-name">${escapeHtml(bloggerText)}</span>
          </div>
          <span class="fame-card-stars">${stars}</span>
        </div>
        <p class="fame-card-content">${escapeHtml(titleText)}</p>
        <div class="fame-card-footer">
          <span class="fame-card-branch">${escapeHtml(branchText)}점</span>
          <span class="fame-card-likes">공감 <span>${likesCount}</span></span>
        </div>
      `;

      track.appendChild(card);
    });

    const cards = Array.from(track.children);
    if (cards.length > 0) {
      for (let i = 0; i < 2; i++) {
        cards.forEach(card => {
          const clone = card.cloneNode(true);
          if (card.onclick) {
            clone.onclick = card.onclick;
          }
          track.appendChild(clone);
        });
      }
    }
  };

  populateTrack(track1, list1);
  populateTrack(track2, list2);
  populateTrack(track3, list3);
}

function initCtaButtons() {
  if (btnGoToSearch) {
    btnGoToSearch.addEventListener("click", () => {
      const target = document.querySelector("#branch-reports");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  if (btnGoToSearch2) {
    btnGoToSearch2.addEventListener("click", () => {
      const target = document.querySelector("#branch-reports");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

function initNavScroll() {
  const navLogo = document.querySelector(".nav-logo");
  if (navLogo) {
    navLogo.style.cursor = "pointer";
    navLogo.addEventListener("click", () => {
      const target = document.querySelector("#hero");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }

  const navMenuLinks = document.querySelectorAll(".nav-menu-link:not(#navGlobalReportLink)");
  navMenuLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const btnScrollTop = document.querySelector("#btnScrollTop");
  if (btnScrollTop) {
    btnScrollTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// ── 체험단 신청 비즈니스 로직 ──────────────────────────────────────

function initApplyBranchAutocomplete() {
  if (!applyBranchInput || !applyBranchSuggestions) return;

  applyBranchInput.addEventListener("input", () => {
    const value = applyBranchInput.value.trim();
    if (!value) {
      applyBranchSuggestions.style.display = "none";
      applyBranchSuggestions.innerHTML = "";
      return;
    }

    const matches = ALL_BRANCH_NAMES.filter(name => 
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (matches.length > 0) {
      applyBranchSuggestions.innerHTML = matches
        .map(name => `<div class="suggestion-item" data-value="${name}">${name}점</div>`)
        .join("");
      applyBranchSuggestions.style.display = "block";
    } else {
      applyBranchSuggestions.innerHTML = `<div class="suggestion-no-result">검색 결과가 없습니다</div>`;
      applyBranchSuggestions.style.display = "block";
    }
  });

  applyBranchSuggestions.addEventListener("click", (e) => {
    const item = e.target.closest(".suggestion-item");
    if (item) {
      const selectedValue = item.getAttribute("data-value");
      applyBranchInput.value = selectedValue;
      applyBranchSuggestions.style.display = "none";
      applyBranchSuggestions.innerHTML = "";
    }
  });

  applyBranchInput.addEventListener("blur", () => {
    setTimeout(() => {
      applyBranchSuggestions.style.display = "none";
      applyBranchSuggestions.innerHTML = "";
    }, 200);
  });

  applyBranchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      applyBranchSuggestions.style.display = "none";
      applyBranchSuggestions.innerHTML = "";
    }
  });
}

function formatDateString(dateStr) {
  if (!dateStr) return "";
  const parts = dateStr.split("-");
  if (parts.length !== 3) return dateStr;
  const d = new Date(parts[0], parts[1] - 1, parts[2]);
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  return `${parseInt(parts[1], 10)}월 ${parseInt(parts[2], 10)}일(${weekdays[d.getDay()]})`;
}

async function initExperience() {
  try {
    const response = await fetch("/api/experience", { cache: "no-store" });
    if (!response.ok) throw new Error("API load failed");
    const data = await response.json();
    experienceConfig = data.config;
    experienceApplications = data.applications || [];
  } catch (err) {
    // LocalStorage Fallback
    const localConfig = localStorage.getItem("etoos247:experience-config");
    const localApps = localStorage.getItem("etoos247:experience-applications");
    
    experienceConfig = localConfig ? JSON.parse(localConfig) : {
      visible: true,
      name: "2027 반수성공반 블로그 체험단",
      applyStart: "2026-04-28",
      applyEnd: "2026-05-05",
      runStart: "2026-05-18",
      runEnd: "2026-05-31",
      feePerPerson: 44000,
      billingMonth: "2026년 6월분",
      maxQuota: 70
    };
    experienceApplications = localApps ? JSON.parse(localApps) : [];
  }

  // Event Listeners for Experience Apply
  if (applyCount) {
    applyCount.addEventListener("input", () => {
      const count = parseInt(applyCount.value, 10) || 0;
      calcNum.textContent = count;
      calcPrice.textContent = (count * (experienceConfig ? experienceConfig.feePerPerson : 44000)).toLocaleString();
    });
  }

  if (experienceApplyForm) {
    experienceApplyForm.addEventListener("submit", handleApplySubmit);
  }

  if (adminExperienceConfigForm) {
    adminExperienceConfigForm.addEventListener("submit", handleSaveConfig);
  }

  if (btnExportExperienceExcel) {
    btnExportExperienceExcel.addEventListener("click", exportExperienceToExcel);
  }

  // Hero Section Button Click
  if (btnGoToApply) {
    btnGoToApply.addEventListener("click", () => {
      const target = document.querySelector("#experience-apply-section");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Bottom Section Button Click
  if (btnGoToApply2) {
    btnGoToApply2.addEventListener("click", () => {
      const target = document.querySelector("#experience-apply-section");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
  initApplyBranchAutocomplete();
  renderExperienceUI();
  
  startCountdown();
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (countdownInterval) clearInterval(countdownInterval);
    } else {
      startCountdown();
    }
  });
}

function renderExperienceUI() {
  if (!experienceConfig) return;

  const visible = experienceConfig.visible;

  // 1. 노출 여부에 따른 메인 페이지 요소 제어
  if (navExperienceApplyLink) {
    navExperienceApplyLink.classList.toggle("hidden", !visible);
  }
  if (btnGoToApply) {
    btnGoToApply.classList.toggle("hidden", !visible);
  }
  if (btnGoToApply2) {
    btnGoToApply2.classList.toggle("hidden", !visible);
  }
  if (experienceApplySection) {
    experienceApplySection.classList.toggle("hidden", !visible);
  }
  
  const applyCountdownCard = document.querySelector("#applyCountdownCard");
  if (applyCountdownCard) {
    applyCountdownCard.classList.toggle("hidden", !visible);
  }

  // 2. 신청 정보 텍스트 바인딩
  if (applySectionTitle) applySectionTitle.textContent = `${experienceConfig.name} 신청`;
  if (infoApplyPeriod) {
    infoApplyPeriod.textContent = `${formatDateString(experienceConfig.applyStart)} ~ ${formatDateString(experienceConfig.applyEnd)}`;
  }
  if (infoRunPeriod) {
    infoRunPeriod.textContent = `${formatDateString(experienceConfig.runStart)} ~ ${formatDateString(experienceConfig.runEnd)}`;
  }
  if (infoBillingMonthText) {
    infoBillingMonthText.textContent = `${experienceConfig.billingMonth} 로열티 청구`;
  }
  if (calcBillingBasis) {
    calcBillingBasis.textContent = `${experienceConfig.billingMonth} 로열티로 청구됩니다.`;
  }
  if (infoMaxQuota) {
    infoMaxQuota.textContent = experienceConfig.maxQuota;
  }

  const totalApplied = experienceApplications.reduce((acc, cur) => acc + cur.count, 0);
  if (currentApplyStatus) {
    currentApplyStatus.textContent = `${totalApplied}/${experienceConfig.maxQuota}`;
  }

  if (applyQuotaCard) {
    applyQuotaCard.classList.toggle("hidden", !visible);
  }
  if (quotaStatusText) {
    quotaStatusText.textContent = `${totalApplied} / ${experienceConfig.maxQuota}명`;
  }
  if (quotaProgressBar || quotaPercentText) {
    const percent = experienceConfig.maxQuota > 0 ? Math.min(100, Math.round((totalApplied / experienceConfig.maxQuota) * 100)) : 0;
    if (quotaProgressBar) {
      quotaProgressBar.style.width = `${percent}%`;
    }
    if (quotaPercentText) {
      quotaPercentText.textContent = `(${percent}%)`;
    }
  }

  // 실시간 계산기 값 초기화
  const count = parseInt(applyCount.value, 10) || 3;
  if (calcNum) calcNum.textContent = count;
  if (calcPrice) calcPrice.textContent = (count * experienceConfig.feePerPerson).toLocaleString();

  // 선착순 마감 또는 기간 마감에 따른 접수 버튼 처리
  const todayStr = new Date().toISOString().slice(0, 10);
  const isExpired = todayStr > experienceConfig.applyEnd;
  const isQuotaFull = totalApplied >= experienceConfig.maxQuota;

  if (btnSubmitApply) {
    if (isQuotaFull) {
      btnSubmitApply.textContent = "선착순 마감되었습니다";
      btnSubmitApply.disabled = true;
    } else if (isExpired) {
      btnSubmitApply.textContent = "신청 기간이 마감되었습니다";
      btnSubmitApply.disabled = true;
    } else {
      btnSubmitApply.textContent = "신청 접수하기";
      btnSubmitApply.disabled = false;
    }
  }



  // 3. 관리자 모드 UI 렌더링
  if (isAdmin) {
    if (adminExperienceManagement) adminExperienceManagement.classList.remove("hidden");
    
    // 설정 폼 기본값 설정
    if (configVisible) configVisible.checked = visible;
    if (configName) configName.value = experienceConfig.name;
    if (configApplyStart) configApplyStart.value = experienceConfig.applyStart;
    if (configApplyEnd) configApplyEnd.value = experienceConfig.applyEnd;
    if (configRunStart) configRunStart.value = experienceConfig.runStart;
    if (configRunEnd) configRunEnd.value = experienceConfig.runEnd;
    if (configMaxQuota) configMaxQuota.value = experienceConfig.maxQuota;
    if (configBillingMonth) configBillingMonth.value = experienceConfig.billingMonth;

    // 신청 현황 테이블 렌더링
    if (adminExperienceTableBody) {
      adminExperienceTableBody.innerHTML = "";
      if (experienceApplications.length === 0) {
        if (adminExperienceEmpty) adminExperienceEmpty.style.display = "block";
      } else {
        if (adminExperienceEmpty) adminExperienceEmpty.style.display = "none";
        experienceApplications.forEach(app => {
          const tr = document.createElement("tr");
          tr.style.borderBottom = "1px solid rgba(255, 255, 255, 0.05)";

          const tdBranch = document.createElement("td");
          tdBranch.style.padding = "12px";
          tdBranch.style.textAlign = "left";
          tdBranch.textContent = `${app.branch}점`;

          const tdCount = document.createElement("td");
          tdCount.style.padding = "12px";
          tdCount.style.textAlign = "center";
          tdCount.textContent = `${app.count}명`;

          const tdFee = document.createElement("td");
          tdFee.style.padding = "12px";
          tdFee.style.textAlign = "right";
          tdFee.style.fontWeight = "700";
          tdFee.style.color = "var(--accent)";
          tdFee.textContent = `${(app.count * experienceConfig.feePerPerson).toLocaleString()}원`;

          const tdDate = document.createElement("td");
          tdDate.style.padding = "12px";
          tdDate.style.textAlign = "center";
          tdDate.style.fontSize = "0.85rem";
          tdDate.style.color = "var(--muted)";
          tdDate.textContent = new Date(app.appliedAt).toLocaleString();

          const tdAction = document.createElement("td");
          tdAction.style.padding = "12px";
          tdAction.style.textAlign = "center";
          
          const deleteBtn = document.createElement("button");
          deleteBtn.type = "button";
          deleteBtn.textContent = "삭제";
          deleteBtn.style.padding = "4px 8px";
          deleteBtn.style.background = "#ef4444";
          deleteBtn.style.color = "white";
          deleteBtn.style.border = "none";
          deleteBtn.style.borderRadius = "4px";
          deleteBtn.style.cursor = "pointer";
          deleteBtn.style.fontSize = "0.8rem";
          deleteBtn.onclick = () => deleteApplication(app.branch);

          tdAction.appendChild(deleteBtn);
          tr.append(tdBranch, tdCount, tdFee, tdDate, tdAction);
          adminExperienceTableBody.appendChild(tr);
        });
      }
    }
  } else {
    if (adminExperienceManagement) adminExperienceManagement.classList.add("hidden");
  }

  // 설정 날짜 변경 시 타이머를 즉각 리셋 및 재시작하도록 조치
  if (typeof startCountdown === "function") {
    startCountdown();
  }
}

async function handleApplySubmit(e) {
  e.preventDefault();
  applyErrorMessage.classList.add("hidden");
  applySuccessMessage.classList.add("hidden");

  const branch = applyBranchInput.value.trim();
  const count = parseInt(applyCount.value, 10);
  const agree = applyAgree.checked;

  if (!branch) {
    showApplyError("지점명을 입력해주세요.");
    return;
  }

  if (!ALL_BRANCH_NAMES.includes(branch)) {
    showApplyError("존재하지 않는 지점명입니다. 자동완성 추천 지점 중에서 올바르게 입력해주세요.");
    return;
  }
  if (isNaN(count) || count < 3) {
    showApplyError("최소 신청 인원은 3명 이상입니다.");
    return;
  }
  if (!agree) {
    showApplyError("유의사항에 동의해주세요.");
    return;
  }

  try {
    const body = {
      action: "apply",
      branch,
      count
    };
    if (isAdmin) {
      body.adminPassword = adminSessionPassword;
    }

    const response = await fetch("/api/experience", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "신청에 실패했습니다.");
    }

    experienceConfig = data.config;
    experienceApplications = data.applications;
    
    localStorage.setItem("etoos247:experience-applications", JSON.stringify(experienceApplications));

    showApplySuccess(`${branch}점의 체험단 신청(${count}명)이 완료되었습니다.`);
    experienceApplyForm.reset();
    applyCount.value = 3;
    calcNum.textContent = 3;
    calcPrice.textContent = (3 * experienceConfig.feePerPerson).toLocaleString();
    
    renderExperienceUI();
  } catch (err) {
    showApplyError(err.message);
  }
}

async function handleSaveConfig(e) {
  e.preventDefault();
  adminConfigMessage.classList.add("hidden");
  adminConfigMessage.className = "apply-success-message hidden"; // Reset to success styling

  const config = {
    visible: configVisible.checked,
    name: configName.value,
    applyStart: configApplyStart.value,
    applyEnd: configApplyEnd.value,
    runStart: configRunStart.value,
    runEnd: configRunEnd.value,
    maxQuota: parseInt(configMaxQuota.value, 10),
    billingMonth: configBillingMonth.value
  };

  try {
    const response = await fetch("/api/experience", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "saveConfig",
        adminPassword: adminSessionPassword,
        config
      })
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "설정 저장에 실패했습니다.");
    }

    experienceConfig = data.config;
    experienceApplications = data.applications;
    
    localStorage.setItem("etoos247:experience-config", JSON.stringify(experienceConfig));

    showAdminConfigMessage("설정이 성공적으로 저장되었습니다.", "success");
    renderExperienceUI();
  } catch (err) {
    showAdminConfigMessage(err.message, "error");
  }
}

async function deleteApplication(branchName) {
  if (!confirm(`${branchName}점의 신청 내역을 삭제하시겠습니까?`)) return;

  try {
    const response = await fetch("/api/experience", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "deleteApply",
        adminPassword: adminSessionPassword,
        branch: branchName
      })
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "삭제에 실패했습니다.");
    }

    experienceConfig = data.config;
    experienceApplications = data.applications;
    localStorage.setItem("etoos247:experience-applications", JSON.stringify(experienceApplications));

    renderExperienceUI();
  } catch (err) {
    alert(err.message);
  }
}

function exportExperienceToExcel() {
  if (experienceApplications.length === 0) {
    alert("다운로드할 신청 내역이 없습니다.");
    return;
  }

  const data = experienceApplications.map(app => ({
    "지점명": `${app.branch}점`,
    "신청 인원": app.count,
    "청구 예정 비용 (VAT 포함)": app.count * (experienceConfig ? experienceConfig.feePerPerson : 44000),
    "신청 일시": new Date(app.appliedAt).toLocaleString()
  }));

  const ws = XLSX.utils.json_to_sheet(data);
  const wscols = [
    { wch: 15 },
    { wch: 12 },
    { wch: 28 },
    { wch: 25 }
  ];
  ws['!cols'] = wscols;

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "체험단 신청 현황");

  const filename = `${experienceConfig ? experienceConfig.name : "체험단_신청_현황"}_${new Date().toISOString().slice(0, 10)}.xlsx`;
  XLSX.writeFile(wb, filename);
}

function showApplyError(msg) {
  if (applyErrorMessage) {
    applyErrorMessage.textContent = msg;
    applyErrorMessage.classList.remove("hidden");
  }
}

// Ensure error class is correct
function showApplySuccess(msg) {
  if (applySuccessMessage) {
    applySuccessMessage.textContent = msg;
    applySuccessMessage.classList.remove("hidden");
  }
}

function showAdminConfigMessage(msg, type) {
  if (adminConfigMessage) {
    adminConfigMessage.textContent = msg;
    adminConfigMessage.className = type === "success" 
      ? "apply-success-message" 
      : "apply-error-message";
    adminConfigMessage.classList.remove("hidden");
    setTimeout(() => {
      adminConfigMessage.classList.add("hidden");
    }, 3000);
  }
}

function startCountdown() {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  countdownInterval = setInterval(() => {
    if (!experienceConfig || !experienceConfig.applyEnd) return;

    const parts = experienceConfig.applyEnd.split("-");
    if (parts.length !== 3) return;
    
    // 마감일의 23시 59분 59초 999밀리초 설정
    const targetDate = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10), 23, 59, 59, 999);
    const now = new Date();

    const diff = targetDate.getTime() - now.getTime();

    // D-Day 일수 계산 (날짜 기준 정밀 계산)
    const targetMidnight = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10), 0, 0, 0, 0).getTime();
    const nowMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0).getTime();
    const dDayDiff = targetMidnight - nowMidnight;
    const dDayDays = Math.ceil(dDayDiff / (1000 * 60 * 60 * 24));
    
    let dDayText = "";
    if (dDayDays > 0) {
      dDayText = `D-${dDayDays}`;
    } else if (dDayDays === 0) {
      dDayText = "D-Day";
    } else {
      dDayText = "마감됨";
    }

    if (countdownTargetText) {
      countdownTargetText.textContent = `${parts[0]}.${parts[1]}.${parts[2]} / ${dDayText}`;
    }

    if (diff <= 0) {
      clearInterval(countdownInterval);
      if (timerDays) timerDays.textContent = "00";
      if (timerHours) timerHours.textContent = "00";
      if (timerMinutes) timerMinutes.textContent = "00";
      if (timerSeconds) timerSeconds.textContent = "00";
      if (timerCentiseconds) timerCentiseconds.textContent = "00";
      if (countdownTitle) countdownTitle.textContent = "체험단 신청이 마감되었습니다.";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    const centiseconds = Math.floor((diff % 1000) / 10);

    if (timerDays) timerDays.textContent = String(days).padStart(2, "0");
    if (timerHours) timerHours.textContent = String(hours).padStart(2, "0");
    if (timerMinutes) timerMinutes.textContent = String(minutes).padStart(2, "0");
    if (timerSeconds) timerSeconds.textContent = String(seconds).padStart(2, "0");
    if (timerCentiseconds) timerCentiseconds.textContent = String(centiseconds).padStart(2, "0");
    if (countdownTitle) countdownTitle.textContent = "체험단 신청 마감까지";
  }, 10);
}
