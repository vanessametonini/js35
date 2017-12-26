const express = require('express'),
      app = express()

app.set('view engine','ejs')

let server = app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`)
})

app.get('/produtos',(requisicao, resposta) => {
    resposta.render(`produtos/lista`)
})

