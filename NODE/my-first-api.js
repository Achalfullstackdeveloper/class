const http = require("http");
 
let messageArray = [];
 
const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("access-control-allow-methods", "GET, POST, OPTIONS");
  res.setHeader("access-control-Allow-Headers", "content-type");
 
  if ( req.url === "/get-messages") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(messageArray));
  } else if (req.url === "/post-messages") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
      console.log(chunk);
    });
    req.on(
      "end",
      () => {
        messageArray.push(data);
        res.writeHead(200, { "content-type": "text/plain" });
        res.end("Message posted successfully");
      });
  } else {
    res.writeHead(404, {
      "content-type": "text/plain",
    });
    res.end("Not Found");
  }
});
server.listen(6000, () => {
  console.log("Server is running at http://localhost:4500/");
});
 



// const http = require("http");
// const url = require("url");
// let arrayofmessages = [];

// const server = http.createServer((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   console.log("Received request", req);

//   if (req.method == "GET" && req.url == "/get-messages") {
//     // changed lines
//     res.writeHead(200, {
//       "Content-Type": "application/json",
//     });
//     res.write(JSON.stringify(arrayofmessages));
//     res.end();
//   } else if (req.method == "POST" && req.url == "/post-messages") {
//     // changed lines
//     res.writeHead(200, {
//       "Content-Type": "application/json",
//     });
//     let data = "";
//     req.on("data", (chunk) => {
//       data += chunk;
//     });

//     req.on("end", () => {
//       const parsedData = JSON.parse(data);
//       arrayofmessages.push(parsedData?.message);
//       res.end(JSON.stringify({ message: "Message Received" }));
//     });
//   } else {
//     // changed lines and status code for error handling
//     res.writeHead(404, {
//       "Content-Type": "application/json",
//     });
//     res.end(JSON.stringify({ message: "Not handled by me" }));
//   }
// });

// server.listen(4500, () => {
//   console.log("Server is running at http://localhost:4500/");
// });

// const http = require("http");
// const url = require("url");
// let arrayofmessages = [];

// const server = http.createServer((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");

//   if (req.method == "GET" && req.url == "/get-messages") {
//     res.writeHead(200, {
//       "Content-Type": "application/json",
//     });
//     res.write(JSON.stringify(arrayofmessages));
//     res.end();
//   } else if (req.method == "POST" && req.url == "/post-messages") {
//     res.writeHead(200, {
//       "Content-Type": "application/json",

//     });

//     let data = "";
//     req.on("data", (chunk) => {
//       data += chunk;
//     });

//     req.on("end", () => {
//       if (data) {
//         const parsedData = JSON.parse(data); // ⚠️ Crashes if invalid JSON
//         arrayofmessages.push(parsedData?.message);
//         res.end(JSON.stringify({ message: "Message Received" }));
//       } else {
//         res.end(JSON.stringify({ message: "No data received" }));
//       }
//     });
//   } else {
//     res.writeHead(404, {
//       "Content-Type": "application/json",
//     });
//     res.end(JSON.stringify({ message: "Not handled by me" }));
//   }
// });

// server.listen(4500, () => {
//   console.log("Server is running at http://localhost:4500/");
// });
