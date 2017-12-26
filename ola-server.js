const http = require('http'),
        ip = 'localhost',
     porta = 3000

http.createServer((requisicao, resposta) => {
        console.log(`Request recebida!`)
        resposta.writeHead(200, {'Content-Type': 'text/html'})
        resposta.end(`<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <title>Olá mundo</title>
</head>
<body>
        <h1>Meu servidor Node <3</h1>
</body>
</html>`);
}).listen(porta, ip)

console.log(`Servidor web executando em http://${ip}:${porta}`)
//console.log(typeof(http))