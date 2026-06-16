const DATA_KEY_CONFIG = "etoos247:experience-config";
const DATA_KEY_APPLICATIONS = "etoos247:experience-applications";
const DATA_KEY_BRANCHES = "etoos247:experience-branches";

const { sampleBranches } = require("../branches-data");

// 메모리 캐시 (Redis가 없는 로컬 개발/임시 환경용)
let localMemoryConfig = null;
let localMemoryApplications = [];

const DEFAULT_CONFIG = {
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

module.exports = async function handler(request, response) {
  response.setHeader("Cache-Control", "no-store");

  try {
    if (request.method === "GET") {
      const config = await getConfig();
      const applications = await getApplications();
      return response.status(200).json({
        config,
        applications,
        source: hasRedisEnv() ? "redis" : "memory"
      });
    }

    if (request.method === "POST") {
      const { action } = request.body || {};
      const adminPassword = request.body?.adminPassword || "";

      // 1. 지점 신청 접수
      if (action === "apply") {
        const { branch, password, count } = request.body || {};
        if (!branch || !count) {
          return response.status(400).json({ error: "지점명과 신청 인원은 필수입니다." });
        }

        const countNum = parseInt(count, 10);
        if (isNaN(countNum) || countNum < 3) {
          return response.status(400).json({ error: "체험단 신청은 최소 3명 이상부터 가능합니다." });
        }

        // 비밀번호 검증 (관리자 세션이 아닐 때만 검사)
        const isAdminSession = adminPassword === getAdminPassword();
        if (!isAdminSession) {
          const branches = await getBranchesData();
          const branchItem = branches.find(b => b.branch === branch);
          if (!branchItem) {
            return response.status(404).json({ error: "존재하지 않는 지점입니다." });
          }
          if (branchItem.password !== password) {
            return response.status(401).json({ error: "지점 비밀번호가 일치하지 않습니다." });
          }
        }

        const config = await getConfig();
        const applications = await getApplications();

        // 선착순 한도 검증 (새 신청 시 추가 인원이 초과하는지 체크)
        const existingIndex = applications.findIndex(a => a.branch === branch);
        const existingCount = existingIndex > -1 ? applications[existingIndex].count : 0;
        const totalOtherCount = applications.reduce((acc, cur, idx) => idx === existingIndex ? acc : acc + cur.count, 0);

        if (totalOtherCount + countNum > config.maxQuota) {
          return response.status(400).json({
            error: `선착순 인원이 초과되었습니다. (남은 신청 가능 인원: ${Math.max(0, config.maxQuota - totalOtherCount)}명)`
          });
        }

        const newApp = {
          branch,
          count: countNum,
          appliedAt: new Date().toISOString()
        };

        if (existingIndex > -1) {
          applications[existingIndex] = newApp;
        } else {
          applications.push(newApp);
        }

        if (hasRedisEnv()) {
          await redisCommand(["SET", DATA_KEY_APPLICATIONS, JSON.stringify(applications)]);
        } else {
          localMemoryApplications = applications;
        }

        return response.status(200).json({ success: true, config, applications });
      }

      // 관리자 비밀번호 검증
      if (adminPassword !== getAdminPassword()) {
        return response.status(401).json({ error: "관리자 비밀번호가 일치하지 않습니다." });
      }

      // 2. 관리자 설정 저장
      if (action === "saveConfig") {
        const { config } = request.body || {};
        if (!config || typeof config.visible === "undefined") {
          return response.status(400).json({ error: "올바르지 않은 설정 데이터입니다." });
        }

        const normalizedConfig = {
          visible: Boolean(config.visible),
          name: String(config.name || DEFAULT_CONFIG.name).trim(),
          applyStart: String(config.applyStart || DEFAULT_CONFIG.applyStart).trim(),
          applyEnd: String(config.applyEnd || DEFAULT_CONFIG.applyEnd).trim(),
          runStart: String(config.runStart || DEFAULT_CONFIG.runStart).trim(),
          runEnd: String(config.runEnd || DEFAULT_CONFIG.runEnd).trim(),
          feePerPerson: parseInt(config.feePerPerson, 10) || DEFAULT_CONFIG.feePerPerson,
          billingMonth: String(config.billingMonth || DEFAULT_CONFIG.billingMonth).trim(),
          maxQuota: parseInt(config.maxQuota, 10) || DEFAULT_CONFIG.maxQuota
        };

        if (hasRedisEnv()) {
          await redisCommand(["SET", DATA_KEY_CONFIG, JSON.stringify(normalizedConfig)]);
        } else {
          localMemoryConfig = normalizedConfig;
        }

        const applications = await getApplications();
        return response.status(200).json({ success: true, config: normalizedConfig, applications });
      }

      // 3. 관리자 지점 신청 목록 일괄 저장 (or 수정)
      if (action === "saveApplications") {
        const { applications } = request.body || {};
        if (!Array.isArray(applications)) {
          return response.status(400).json({ error: "올바르지 않은 신청 데이터 포맷입니다." });
        }

        const normalized = applications.map(app => ({
          branch: String(app.branch).trim(),
          count: parseInt(app.count, 10) || 3,
          appliedAt: app.appliedAt || new Date().toISOString()
        })).filter(app => app.branch);

        if (hasRedisEnv()) {
          await redisCommand(["SET", DATA_KEY_APPLICATIONS, JSON.stringify(normalized)]);
        } else {
          localMemoryApplications = normalized;
        }

        const config = await getConfig();
        return response.status(200).json({ success: true, config, applications: normalized });
      }

      // 4. 관리자 특정 지점 신청 내역 삭제
      if (action === "deleteApply") {
        const { branch } = request.body || {};
        if (!branch) {
          return response.status(400).json({ error: "삭제할 지점명이 누락되었습니다." });
        }

        const applications = await getApplications();
        const filtered = applications.filter(a => a.branch !== branch);

        if (hasRedisEnv()) {
          await redisCommand(["SET", DATA_KEY_APPLICATIONS, JSON.stringify(filtered)]);
        } else {
          localMemoryApplications = filtered;
        }

        const config = await getConfig();
        return response.status(200).json({ success: true, config, applications: filtered });
      }

      return response.status(400).json({ error: "지원하지 않는 action입니다." });
    }

    return response.status(405).json({ error: "지원하지 않는 요청 메서드입니다." });
  } catch (error) {
    return response.status(500).json({ error: error.message || "서버 처리 중 오류가 발생했습니다." });
  }
};

async function getConfig() {
  if (!hasRedisEnv()) {
    return localMemoryConfig || DEFAULT_CONFIG;
  }
  try {
    const data = await redisCommand(["GET", DATA_KEY_CONFIG]);
    if (!data) return DEFAULT_CONFIG;
    return typeof data === "string" ? JSON.parse(data) : data;
  } catch {
    return DEFAULT_CONFIG;
  }
}

async function getApplications() {
  if (!hasRedisEnv()) {
    return localMemoryApplications;
  }
  try {
    const data = await redisCommand(["GET", DATA_KEY_APPLICATIONS]);
    if (!data) return [];
    return typeof data === "string" ? JSON.parse(data) : data;
  } catch {
    return [];
  }
}

async function getBranchesData() {
  if (!hasRedisEnv()) {
    return sampleBranches;
  }
  try {
    const data = await redisCommand(["GET", DATA_KEY_BRANCHES]);
    if (!data) return sampleBranches;
    const parsed = typeof data === "string" ? JSON.parse(data) : data;
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : sampleBranches;
  } catch {
    return sampleBranches;
  }
}

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "etoos247!";
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
