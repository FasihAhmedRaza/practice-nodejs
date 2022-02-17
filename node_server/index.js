const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log("request for" + req.url + "by method" + req.method);

  if (req.method == "GET") {
    var fileURL;
    if (req.url == "/") {
      fileURL = "/index.html";
    } else {
      fileURL = req.url;
    }

    var filePath = path.resolve("./public" + fileURL); //yeh start se end complete path bana dee gaa

    const fileExt = path.extname(filePath); //extension name

    if (fileExt == ".html") {
      //fs is core methos
      fs.exists(filePath, (exists) => { // موجود
        if (!exists) {
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html");
          res.end(
            "<html><body> <h1>error 404 " +
              fileURL +
              "does not exists  </h1></body></html>"
          );
        }
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html"); //createReadStream  strings of bytes me convert karee gaa
        fs.createReadStream(filePath).pipe(res); //pipe me hame aik saat response provide karwata  ha
      });
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end(
        "<html><body> <h1>error 404 " +
          fileURL +
          "not a html file </h1></body></html>"
      );
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end(
      "<html><body> <h1>error 404 " +
        fileURL +
        "not a supported </h1></body></html>"
    );
  }

  // console.log(req.headers);

  //    res.statusCode = 200;
  //    res.setHeader('Content-Type' ,'text/html');
  //    res.end('<html><body> <h1>Server connection succeed</h1></body></html>');
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`);
});
