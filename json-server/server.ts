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

  /**
   * OPTIONS
   */
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();

    return;
  }

  /**
   * GET
   */
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

      /**
       * Event
       */
      const parsedBody = JSON.parse(body);
      const fileName = `${parsedBody.event.alert.title}-${parsedBody.event.alert.id}`;

      /**
       * Write Event File
       */
      fs.writeFile(
        `./events/${fileName}.json`,
        JSON.stringify(parsedBody.event, null, 2),
        "utf-8",
        (error) => {
          if (error) {
            console.error("Error while saving event file", error);
            return;
          }

          console.log("Event saved to", `${fileName}.json`);
        }
      );

      /**
       * Write Message File
       */
      fs.writeFile(
        `./events/${fileName}.txt`,
        parsedBody.message,
        "utf-8",
        (error) => {
          if (error) {
            console.error("Error while saving message file", error);
            return;
          }

          console.log("Message saved to", `${fileName}.txt`);
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
