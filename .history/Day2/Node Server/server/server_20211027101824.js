const http = require("http")

http.createServer(function(request,response){
    response.writeHead(200, {
        "Content-Type": "text/plain;charts=utf-8" // 输出类型
    })
})

console.log('运行服务成功！！')