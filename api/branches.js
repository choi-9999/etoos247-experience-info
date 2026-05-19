const DATA_KEY = "etoos247:experience-branches";

const sampleBranches = [
  {
    branch: "강남점",
    password: "1234",
    people: [
      {
        name: "홍길동",
        phone: "010-0000-0000",
        blog: "https://blog.naver.com/",
        note: "오전 연락 가능"
      },
      {
        name: "김하은",
        phone: "010-0000-0001",
        blog: "https://blog.naver.com/",
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
        blog: "https://blog.naver.com/",
        note: "문자 우선 요청"
      },
      {
        name: "정도윤",
        phone: "010-1111-1112",
        blog: "https://blog.naver.com/",
        note: "오후 연락 가능"
      },
      {
        name: "이서아",
        phone: "010-1111-1113",
        blog: "https://blog.naver.com/",
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
        blog: "https://blog.naver.com/",
        note: "신규 담당자"
      },
      {
        name: "한지우",
        phone: "010-2222-2223",
        blog: "https://blog.naver.com/",
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
        blog: "https://blog.naver.com/",
        note: "오후 2시 이후 연락 가능"
      },
      {
        name: "윤채원",
        phone: "010-3333-3334",
        blog: "https://blog.naver.com/",
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
        blog: "https://blog.naver.com/",
        note: "특이사항 없음"
      },
      {
        name: "문시우",
        phone: "010-4444-4445",
        blog: "https://blog.naver.com/",
        note: "보호자 동행"
      }
    ]
  }
];

module.exports = async function handler(request, response) {
  response.setHeader("Cache-Control", "no-store");

  try {
    if (request.method === "GET") {
      const branches = await getBranches();
      return response.status(200).json({
        branches,
        source: hasRedisEnv() ? "redis" : "sample"
      });
    }

    if (request.method === "POST") {
      const adminPassword = getBodyValue(request.body, "adminPassword");

      if (adminPassword !== getAdminPassword()) {
        return response.status(401).json({
          error: "관리자 비밀번호가 일치하지 않습니다."
        });
      }

      if (request.body?.action === "verify") {
        return response.status(200).json({
          verified: true
        });
      }

      if (!hasRedisEnv()) {
        return response.status(503).json({
          error: "서버 저장소가 아직 연결되지 않았습니다."
        });
      }

      const branches = normalizeBranches(request.body?.branches);

      if (branches.length === 0) {
        return response.status(400).json({
          error: "저장할 지점 데이터가 없습니다."
        });
      }

      await redisCommand(["SET", DATA_KEY, JSON.stringify(branches)]);

      return response.status(200).json({
        branches,
        saved: true
      });
    }

    return response.status(405).json({
      error: "지원하지 않는 요청입니다."
    });
  } catch (error) {
    return response.status(500).json({
      error: "서버 처리 중 오류가 발생했습니다."
    });
  }
};

async function getBranches() {
  if (!hasRedisEnv()) {
    return normalizeBranches(sampleBranches);
  }

  const savedData = await redisCommand(["GET", DATA_KEY]);

  if (!savedData) {
    return normalizeBranches(sampleBranches);
  }

  try {
    const parsedData = typeof savedData === "string" ? JSON.parse(savedData) : savedData;
    const branches = normalizeBranches(parsedData);
    return branches.length > 0 ? branches : normalizeBranches(sampleBranches);
  } catch {
    return normalizeBranches(sampleBranches);
  }
}

function normalizeBranches(branchData) {
  if (!Array.isArray(branchData)) {
    return [];
  }

  return branchData
    .filter((item) => item?.branch)
    .map((item) => ({
      branch: String(item.branch).trim(),
      password: String(item.password || "1234"),
      people: Array.isArray(item.people)
        ? item.people.map((person) => ({
            name: String(person.name || "").trim(),
            phone: String(person.phone || "").trim(),
            blog: String(person.blog || "").trim(),
            note: String(person.note || "").trim()
          })).filter((person) => person.name)
        : []
    }))
    .filter((item) => item.branch && item.people.length > 0);
}

function getBodyValue(body, key) {
  return typeof body?.[key] === "string" ? body[key] : "";
}

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "etoos247";
}

function hasRedisEnv() {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}

async function redisCommand(command) {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
  const redisResponse = await fetch(`${redisUrl}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${redisToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify([command])
  });

  if (!redisResponse.ok) {
    throw new Error("Redis request failed");
  }

  const [result] = await redisResponse.json();

  if (result.error) {
    throw new Error(result.error);
  }

  return result.result;
}
