const cluster = require("cluster");

// is the file being executed in master mode ?
if (cluster.isMaster) {
  // cause index.js to be executed again but
  // in child mode
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  // a child
  const express = require("express");
  const app = express();

  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

  app.get("/", (req, res) => {
    doWork(5000);
    res.send("hi there");
  });

  app.get("/fast", (req, res) => {
    res.send("fast");
  });

  app.listen(3000);
}
