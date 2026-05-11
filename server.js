const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const ANT_V_API = 'https://antv-studio.alipay.com/api/gpt-vis';

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
};

// 代理请求到 AntV API
function proxyToAntV(req, res, body) {
    const url = new URL(ANT_V_API);
    const postData = body;

    const options = {
        hostname: url.hostname,
        port: 443,
        path: url.pathname,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData),
        },
    };

    const apiReq = https.request(options, (apiRes) => {
        let data = '';
        apiRes.on('data', (chunk) => (data += chunk));
        apiRes.on('end', () => {
            res.writeHead(apiRes.statusCode, {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            });
            res.end(data);
        });
    });

    apiReq.on('error', (err) => {
        console.error('Proxy error:', err.message);
        res.writeHead(502, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, errorMessage: '代理请求失败: ' + err.message }));
    });

    apiReq.write(postData);
    apiReq.end();
}

// 静态文件服务
function serveStatic(filePath, res) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('Not Found');
            } else {
                res.writeHead(500);
                res.end('Server Error');
            }
            return;
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
}

const server = http.createServer((req, res) => {
    // CORS 预检
    if (req.method === 'OPTIONS') {
        res.writeHead(204, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        });
        res.end();
        return;
    }

    // API 代理
    if (req.method === 'POST' && req.url === '/api/generate') {
        let body = '';
        req.on('data', (chunk) => (body += chunk));
        req.on('end', () => {
            console.log('[API] Generating chart...');
            proxyToAntV(req, res, body);
        });
        return;
    }

    // 静态文件
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    serveStatic(filePath, res);
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
