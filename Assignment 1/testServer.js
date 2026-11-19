// Test HTTP server routes
const http = require("http");

function testRoute(path) {
  return new Promise((resolve) => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: path,
      method: "GET",
    };

    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        resolve({
          path: path,
          status: res.statusCode,
          response: data.substring(0, 100),
        });
      });
    });

    req.on("error", (err) => {
      resolve({
        path: path,
        error: err.message,
      });
    });

    req.end();
  });
}

// Wait for server to start
setTimeout(async () => {
  console.log("Testing HTTP Server Routes:\n");

  const routes = ["/", "/about", "/contact", "/invalid"];

  for (const route of routes) {
    const result = await testRoute(route);
    if (result.error) {
      console.log(`Route: ${result.path} - Error: ${result.error}`);
    } else {
      console.log(
        `Route: ${result.path} - Status: ${result.status} - Response: ${result.response}...`
      );
    }
  }

  console.log("\nServer test completed. Server is running on http://localhost:3000");
  process.exit(0);
}, 2000);
