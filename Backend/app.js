const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.writeHead(300, { "Content-Type": "text/html" });
    res.end("<h1>Homepage</h1>");
    console.log("Homepage");
  }
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
