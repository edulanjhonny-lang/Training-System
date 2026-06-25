const {
  assertAdmin,
  readBody,
  sendJson,
  supabaseRequest,
  toSubmission,
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

    if (!["Submitted", "Pass", "Revise", "Fail"].includes(status)) {
      return sendJson(res, 400, { error: "Invalid submission status." });
    }

    const rows = await supabaseRequest(`submissions?id=eq.${encodeURIComponent(id)}`, {
      method: "PATCH",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify({ status, updated_at: new Date().toISOString() }),
    });

    return sendJson(res, 200, toSubmission(rows[0]));
  } catch (error) {
    return sendJson(res, error.status || 500, { error: error.message });
  }
};
