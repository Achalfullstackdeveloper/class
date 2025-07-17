const http = require("http");

let studentData = []; 

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "content-type");

  if (req.method === "GET" && req.url === "/students") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(studentData));

  } else if (req.method === "POST" && req.url === "/student") {
    let stringData = "";
//  READ DATA FROM REQUEST
    req.on("data", (data) => {
      stringData += data;
    });
//WHEN DATA READING IS COMPLETE
    req.on("end", () => {
      console.log(stringData);
      const student = JSON.parse(stringData);
      studentData.push(student);
      //SEND RESPONSE
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("Message posted successfully");
    });

  } else {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello World");
  }
});

server.listen(4000, () => {
  console.log("Server is running at http://localhost:4000/");
});
