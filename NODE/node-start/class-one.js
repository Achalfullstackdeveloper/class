                         
const http = require("http");
const url = require("url")
const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  console.log("Received request",req);
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });
if(req.url=="/achal"){
  res.end("Hello,Achal!");
}else if (req.url=="/khushi"){
  res.end("Hello,Khushi");
}else{
  res.end("hello world");
}
});

server.listen(4000, () => {
  console.log("Server is running at http://localhost:4000/");
});
                                                                                                           