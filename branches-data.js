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

if (typeof window !== "undefined") {
  window.sampleBranches = sampleBranches;
}

if (typeof module !== "undefined") {
  module.exports = { sampleBranches };
}
