const {
  assertAdmin,
  readBody,
  sendJson,
  supabaseRequest,
  toTrainee,
} = require("../_lib/supabase-rest");

module.exports = async function handler(req, res) {
  try {
    if (req.method !== "PATCH") {
      return sendJson(res, 405, { error: "Method not allowed." });
    }

    assertAdmin(req);

    const id = req.query.id;
    const body = await readBody(req);
    const status = body.status;

    if (!["pending", "approved", "rejected"].includes(status)) {
      return sendJson(res, 400, { error: "Invalid trainee status." });
    }

    const rows = await supabaseRequest(`trainees?id=eq.${encodeURIComponent(id)}`, {
      method: "PATCH",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify({ status }),
    });

    return sendJson(res, 200, toTrainee(rows[0]));
  } catch (error) {
    return sendJson(res, error.status || 500, { error: error.message });
  }
};
