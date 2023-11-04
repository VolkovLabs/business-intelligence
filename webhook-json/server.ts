const http = require("http");
const fs = require("fs");

/**
 * Server Port
 */
const port = 3000;

/**
 * Create Server
 */
const server = http.createServer(function (req, res) {
  /**
   * Set CORS headers
   */
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH"
  );
  res.setHeader("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();

    return;
  }

  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write("ok");
    res.end();

    return;
  }

  /**
   * POST
   */
  if (req.method === "POST") {
    let body = "";
    req.on("data", function (chunk) {
      body += chunk;
    });

    req.on("end", function () {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write(`${req.method}: Success!`);
      res.end();

      const event = JSON.parse(body);
      const fileName = `${event.alert.title}-${event.alert.id}.json`;

      /**
       * Write File
       */
      fs.writeFile(
        `./events/${fileName}`,
        JSON.stringify(event, null, 2),
        "utf-8",
        (error) => {
          if (error) {
            console.error("Error while saving", error);
            return;
          }

          console.log("JSON saved to", fileName);
        }
      );
    });

    return;
  }
});

/**
 * Listen on port
 */
server.listen(port);
console.log(`Server is running on port ${port}...`);
