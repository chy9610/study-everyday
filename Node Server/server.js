var http = require("http");
http.createServer(function(req, res) {
    res.writeHead(200, {
        "Content-Type" : "text/plain;charset=utf-8" // 输出类型
    });
    res.write("你好");// 页面输出
    res.end();
}).listen(10000); // 监听端口号
console.log("服务器启动!");

