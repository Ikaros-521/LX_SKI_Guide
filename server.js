const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 8080;
const publicDir = path.join(__dirname, 'out');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff'
};

const server = http.createServer((req, res) => {
  // 将请求路径映射到 /LX_SKI_Guide/
  let url = req.url;
  if (url.startsWith('/LX_SKI_Guide')) {
    url = url.replace('/LX_SKI_Guide', '');
  }
  
  if (url === '/') {
    url = '/index.html';
  }
  
  const filePath = path.join(publicDir, url);
  const ext = path.extname(filePath).toLowerCase();
  const mimeType = mimeTypes[ext] || 'application/octet-stream';
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(200, { 
        'Content-Type': mimeType,
        'Access-Control-Allow-Origin': '*'
      });
      res.end(content);
    }
  });
});

server.listen(port, () => {
  console.log(`本地服务器运行在 http://localhost:${port}`);
  console.log(`访问 http://localhost:${port}/LX_SKI_Guide/ 查看网站`);
});
