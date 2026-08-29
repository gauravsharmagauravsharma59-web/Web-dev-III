// 3. Basic HTTP Server using http Module
// Run: node server.js
// Visit: http://localhost:3000

const http = require("http");
const logger = require("./modules/logger");

const PORT = 3000;
const HOST = "localhost";

// Create HTTP server
const server = http.createServer((req, res) => {
  logger.info(`Incoming request: ${req.method} ${req.url}`);

  // Set response headers
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  // Route handling
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200);
    res.end(
      `<h1>Welcome to Node Server</h1>
       <p>This is the home page</p>
       <ul>
         <li><a href="/about">About</a></li>
         <li><a href="/contact">Contact</a></li>
       </ul>`
    );
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200);
    res.end(
      `<h1>About Page</h1>
       <p>This is the Smart Utility Toolkit - Web Dev III Assignment</p>
       <a href="/">Back to Home</a>`
    );
  } else if (req.url === "/contact" && req.method === "GET") {
    res.writeHead(200);
    res.end(
      `<h1>Contact Page</h1>
       <p>Email: student@university.com</p>
       <p>Phone: +1-234-567-8900</p>
       <a href="/">Back to Home</a>`
    );
  } else {
    // Invalid route - 404 error
    res.writeHead(404);
    res.end(
      `<h1>404 - Page Not Found</h1>
       <p>The page you requested does not exist.</p>
       <a href="/">Go to Home</a>`
    );
  }

  logger.info(`Response sent: ${res.statusCode} for ${req.url}`);
});

// Start server
server.listen(PORT, HOST, () => {
  logger.info(`Server running at http://${HOST}:${PORT}/`);
  console.log(`\n✓ Server is running!`);
  console.log(`  Visit: http://localhost:3000/`);
  console.log(`  Routes: /, /about, /contact\n`);
});

module.exports = server;
