const http = require('http'),
        ip = 'localhost',
     porta = 3000

http.createServer((requisicao, resposta) => {
        console.log(`Request recebida!`)
        resposta.writeHead(200, {'Content-Type': 'text/plain'})
        resposta.end(`Hello World!`);
}).listen(porta, ip)

console.log(`Servidor web executando em http://${ip}:${porta}`)