const DEFAULT_ADMIN_EMAILS = "edulanjhonny@gmail.com,celinecabanez@gmail.com";

function normalizeEmail(email = "") {
  return String(email).trim().toLowerCase();
}

function getAdminEmails() {
  return (process.env.ADMIN_EMAILS || DEFAULT_ADMIN_EMAILS)
    .split(",")
    .map(normalizeEmail)
    .filter(Boolean);
}

function sendJson(res, status, data) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(data));
}

function assertConfigured() {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    const error = new Error("Supabase environment variables are missing.");
    error.status = 500;
    throw error;
  }
}

function assertAdmin(req) {
  const email = normalizeEmail(req.headers["x-admin-email"]);
  const pin = String(req.headers["x-admin-pin"] || "");
  const expectedPin = process.env.ADMIN_PIN || "2468";

  if (!getAdminEmails().includes(email) || pin !== expectedPin) {
    const error = new Error("Unauthorized admin request.");
    error.status = 401;
    throw error;
  }
}

async function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body || "{}");

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

async function supabaseRequest(path, options = {}) {
  assertConfigured();

  const response = await fetch(`${process.env.SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const text = await response.text();
  const payload = text ? JSON.parse(text) : null;

  if (!response.ok) {
    const error = new Error(payload?.message || `Supabase request failed: ${response.status}`);
    error.status = response.status;
    error.details = payload;
    throw error;
  }

  return payload;
}

function toTrainee(row) {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    track: row.track,
    level: row.level,
    portfolio: row.portfolio || "",
    status: row.status,
    createdAt: row.created_at,
  };
}

function toSubmission(row) {
  return {
    id: row.id,
    traineeId: row.trainee_id,
    lessonId: row.lesson_id,
    lessonTitle: row.lesson_title,
    link: row.link || "",
    reflection: row.reflection || "",
    status: row.status,
    createdAt: row.created_at,
  };
}

module.exports = {
  assertAdmin,
  normalizeEmail,
  readBody,
  sendJson,
  supabaseRequest,
  toSubmission,
  toTrainee,
};
