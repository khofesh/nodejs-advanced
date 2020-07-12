process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");

// is the file being executed in master mode ?
if (cluster.isMaster) {
  // cause index.js to be executed again but
  // in child mode
  cluster.fork();
  cluster.fork();
} else {
  // a child
  const express = require("express");
  const crypto = require("crypto");
  const app = express();

  app.get("/", (req, res) => {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      res.send("hi there");
    });
  });

  app.get("/fast", (req, res) => {
    res.send("fast");
  });

  app.listen(3000);
}
