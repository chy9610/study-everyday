const http = require("http")

http.createServer(function(request,response){
    response.writeHead(200, {
        "Content-Type": "text/plain;charts=utf-8" // 输出类型
    });
    response.write('你好啊！！打工人'); // 页面输出
    response.end();
}).listen(10000) // 端口号
console.log('运行服务成功！！')