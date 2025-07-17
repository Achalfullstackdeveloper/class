const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  // // handling the query paraneters
  const x = url.parse(req.url, true);
  const query = x.query;
let returnString = "";

function myFunction(a,b,c){
  c();
  ret
}

if (query?.age) {
  returnString += ` Hello, ${query.age} years old!`;
}
if (query?.hairstyle) {
  returnString += ` Hello, ${query.hairstyle} hairstyle!`;
}



  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  if (req.url == "/achal") {
    res.end("Hello,Achal!" + returnString);
  } else if (req.url == "/khushi") {
    res.end("Hello,Khushi"+returnString);
  } else {
    res.end("hello world"+returnString);
  }
});

server.listen(4000, () => {
  console.log("Server is running at http://localhost:4000/");
});
