// server.js
const cors_proxy = require('cors-anywhere');

const host = 'localhost';
const port = 8080;

cors_proxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: [],
  removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
  console.log(`CORS Anywhere proxy running at http://${host}:${port}`);
});
