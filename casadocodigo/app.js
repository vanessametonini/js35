const express = require('express'),
      app = express()

let server = app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`)
})

app.get('/produtos',(requisicao, resposta) => {
    resposta.send(`<h1>Listagem de produtos</h1>`)
})

