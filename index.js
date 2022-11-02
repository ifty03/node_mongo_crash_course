const { firstName, lastName } = require("./others");
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello node js");
});
const PORT = 5000;
console.log(`server is running port ${PORT}`);
console.log("hello world");
console.log("hello world");
