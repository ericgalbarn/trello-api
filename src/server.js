import express from "express";
const app = express();

const hostname = "localhost";
const port = 8017;

app.get("/", function (req, res) {
  res.send("<h1>Hello World Nodejs ericg</h1>");
});

app.listen(port, hostname, () => {
  console.log(
    `Hello EricG, the server is running at http://${hostname}:${port}/ `
  );
});
