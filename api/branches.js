const DATA_KEY = "etoos247:experience-branches";
const { sampleBranches } = require("../branches-data");

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
