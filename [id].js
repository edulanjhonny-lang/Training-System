const {
  assertAdmin,
  normalizeEmail,
  readBody,
  sendJson,
  supabaseRequest,
  toTrainee,
} = require("./_lib/supabase-rest");

module.exports = async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const url = new URL(req.url, "http://localhost");
      const email = normalizeEmail(url.searchParams.get("email") || "");
      const query = email
        ? `trainees?email=eq.${encodeURIComponent(email)}&select=*&order=created_at.desc`
        : "trainees?select=*&order=created_at.desc";

      if (!email) assertAdmin(req);

      const rows = await supabaseRequest(query);
      return sendJson(res, 200, rows.map(toTrainee));
    }

    if (req.method === "POST") {
      const body = await readBody(req);
      const payload = {
        id: body.id,
        name: String(body.name || "").trim(),
        email: normalizeEmail(body.email),
        track: body.track,
        level: body.level,
        portfolio: String(body.portfolio || "").trim(),
        status: "pending",
      };

      if (!payload.name || !payload.email || !payload.track || !payload.level) {
        return sendJson(res, 400, { error: "Missing required trainee fields." });
      }

      const rows = await supabaseRequest("trainees", {
        method: "POST",
        headers: { Prefer: "return=representation" },
        body: JSON.stringify(payload),
      });
      return sendJson(res, 201, toTrainee(rows[0]));
    }

    return sendJson(res, 405, { error: "Method not allowed." });
  } catch (error) {
    return sendJson(res, error.status || 500, { error: error.message });
  }
};
