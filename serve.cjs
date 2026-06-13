const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, 'public');
const TYPES = { '.html':'text/html; charset=utf-8', '.svg':'image/svg+xml', '.css':'text/css', '.js':'text/javascript', '.json':'application/json', '.png':'image/png', '.jpg':'image/jpeg', '.ico':'image/x-icon' };
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.endsWith('/')) p += 'index.html';
  const fp = path.join(ROOT, p);
  if (!fp.startsWith(ROOT)) { res.statusCode = 403; return res.end('forbidden'); }
  fs.readFile(fp, (err, data) => {
    if (err) { res.statusCode = 404; return res.end('404 ' + p); }
    res.setHeader('Content-Type', TYPES[path.extname(fp).toLowerCase()] || 'application/octet-stream');
    res.end(data);
  });
}).listen(5123, () => console.log('vikrr-web on http://localhost:5123'));
