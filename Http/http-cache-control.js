const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer((req, res) => {
    fs.readFile(path.join(__dirname, req.url), (err, data) => {
      if (err) {
        res.writeHead(404, "sorry, not found");
        res.end("oh, not found");
      } else {
        // eg1 new Date().toGMTString()
        // res.setHeader("Expires", "Sun, 16 Jun 2019 08:44:32 GMT");

        // eg2
        // res.setHeader("Pragma", "np-cache");

        // eg3
        // res.setHeader("Expires", "Sun, 16 Jun 2019 08:30:32 GMT");
        // res.setHeader("Pragma", "np-cache");

        // eg4
        let date = new Date(Date.now() + 1000 * 5).toGMTString();
        res.setHeader("Expires", date);

        // cache-control
        res.setHeader("Cache-Control", "max-age=10");
        res.setHeader("Cache-Control", "no-cache"); // 存了不用
        // 配合last-modified-since 如果没修改响应报文304，使用原来的缓存
        // 整个通信链路不存储该报文
        res.setHeader("Cache-Control", "no-store"); // 根本不存

        res.writeHead(200, "very ok");
        res.end(data);
        // 但页面的请求还是一直会发且没有缓存，在请求头中Cache-Control: max-age=0
        // memory-cache和disk-cache的区别
      }
    });
  })
  .listen(8080);
console.log("visit localhost:8080");
