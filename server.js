const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 8766);
const HOST = process.env.HOST || "127.0.0.1";
const ROOT = __dirname;
const DATA_FILE = path.join(ROOT, "data.json");

function ensureData() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ trainees: [], submissions: [] }, null, 2));
  }
}

function readData() {
  ensureData();
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

function sendJson(res, status, payload) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
  });
}

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".html") return "text/html; charset=utf-8";
  if (ext === ".css") return "text/css; charset=utf-8";
  if (ext === ".js") return "application/javascript; charset=utf-8";
  if (ext === ".json") return "application/json; charset=utf-8";
  return "text/plain; charset=utf-8";
}

async function handleApi(req, res, urlPath) {
  const data = readData();

  if (req.method === "GET" && urlPath === "/api/trainees") {
    sendJson(res, 200, data.trainees);
    return;
  }

  if (req.method === "POST" && urlPath === "/api/trainees") {
    const trainee = await readBody(req);
    if (!trainee.email || !trainee.name) {
      sendJson(res, 400, { error: "Name and email are required." });
      return;
    }
    if (data.trainees.some((item) => item.email === trainee.email)) {
      sendJson(res, 409, { error: "Email already registered." });
      return;
    }
    data.trainees.push(trainee);
    writeData(data);
    sendJson(res, 201, trainee);
    return;
  }

  const traineeMatch = urlPath.match(/^\/api\/trainees\/([^/]+)$/);
  if (req.method === "PATCH" && traineeMatch) {
    const patch = await readBody(req);
    data.trainees = data.trainees.map((trainee) => (
      trainee.id === traineeMatch[1] ? { ...trainee, ...patch } : trainee
    ));
    writeData(data);
    sendJson(res, 200, { ok: true });
    return;
  }

  if (req.method === "GET" && urlPath === "/api/submissions") {
    sendJson(res, 200, data.submissions);
    return;
  }

  if (req.method === "POST" && urlPath === "/api/submissions") {
    const submission = await readBody(req);
    data.submissions = data.submissions.filter((item) => !(
      item.traineeId === submission.traineeId && item.lessonId === submission.lessonId
    ));
    data.submissions.push(submission);
    writeData(data);
    sendJson(res, 201, submission);
    return;
  }

  const submissionMatch = urlPath.match(/^\/api\/submissions\/([^/]+)$/);
  if (req.method === "PATCH" && submissionMatch) {
    const patch = await readBody(req);
    data.submissions = data.submissions.map((submission) => (
      submission.id === submissionMatch[1] ? { ...submission, ...patch } : submission
    ));
    writeData(data);
    sendJson(res, 200, { ok: true });
    return;
  }

  sendJson(res, 404, { error: "Not found." });
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host}`);
    const urlPath = decodeURIComponent(url.pathname);

    if (urlPath.startsWith("/api/")) {
      await handleApi(req, res, urlPath);
      return;
    }

    const relative = urlPath === "/" ? "index.html" : urlPath.replace(/^\/+/, "");
    const filePath = path.resolve(ROOT, relative);

    if (filePath !== ROOT && !filePath.startsWith(ROOT + path.sep)) {
      res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Forbidden");
      return;
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Not found");
        return;
      }
      res.writeHead(200, {
        "Content-Type": contentType(filePath),
        "Cache-Control": "no-store",
      });
      res.end(data);
    });
  } catch (error) {
    sendJson(res, 500, { error: error.message });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Training portal running at http://${HOST}:${PORT}/`);
});
