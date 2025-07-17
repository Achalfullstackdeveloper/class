
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html"
  });

  if (req.url === "/achal") {
    res.write("<h1>Hello, Achal!</h1>");
    res.end();
    return;
  } else if (req.url === "/himanshu") {
    res.write("<h1>Hello, Himanshu!</h1>");
  } else {
    res.write("<h1>Hello, browser!</h1>");
  }

  res.end();
});

server.listen(4000, () => {
  console.log("Server is running at http://localhost:4000/");
});
