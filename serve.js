// Tiny static file server (no deps), no-store so edits show immediately.
const http = require("http");
const fs = require("fs");
const path = require("path");
const ROOT = __dirname;
const PORT = process.env.PORT || 8010;
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml" };
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p === "/") p = "/index.html";
  const file = path.join(ROOT, p);
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end("Forbidden"); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end("Not found"); }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream",
      "Cache-Control": "no-store" });
    res.end(data);
  });
}).listen(PORT, () => console.log("Phrasebook on http://localhost:" + PORT));
