module.exports = app => {
    app.get('/produtos',(requisicao, resposta) => {
        resposta.render(`produtos/lista`)
    })
}