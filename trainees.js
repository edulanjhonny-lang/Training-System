const {
  assertAdmin,
  readBody,
  sendJson,
  supabaseRequest,
  toSubmission,
} = require("./_lib/supabase-rest");

module.exports = async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const url = new URL(req.url, "http://localhost");
      const traineeId = url.searchParams.get("traineeId");
      const query = traineeId
        ? `submissions?trainee_id=eq.${encodeURIComponent(traineeId)}&select=*&order=created_at.desc`
        : "submissions?select=*&order=created_at.desc";

      if (!traineeId) assertAdmin(req);

      const rows = await supabaseRequest(query);
      return sendJson(res, 200, rows.map(toSubmission));
    }

    if (req.method === "POST") {
      const body = await readBody(req);
      const payload = {
        id: body.id,
        trainee_id: body.traineeId,
        lesson_id: body.lessonId,
        lesson_title: body.lessonTitle,
        link: String(body.link || "").trim(),
        reflection: String(body.reflection || "").trim(),
        status: "Submitted",
      };

      if (!payload.trainee_id || !payload.lesson_id || !payload.lesson_title) {
        return sendJson(res, 400, { error: "Missing required submission fields." });
      }

      const rows = await supabaseRequest("submissions?on_conflict=trainee_id,lesson_id", {
        method: "POST",
        headers: { Prefer: "resolution=merge-duplicates,return=representation" },
        body: JSON.stringify(payload),
      });

      return sendJson(res, 201, toSubmission(rows[0]));
    }

    return sendJson(res, 405, { error: "Method not allowed." });
  } catch (error) {
    return sendJson(res, error.status || 500, { error: error.message });
  }
};
