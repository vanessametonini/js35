const app = require('./custom-express')()

app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`)
})