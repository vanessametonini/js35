let connectionFactory = require('../infra/connectionFactory')

module.exports = app => {
    app.get('/produtos',(requisicao, resposta) => {
         
        let conexao = connectionFactory()

        conexao.query(
            `SELECT * FROM livros`
            , (erro, resultados, campos) => {
                //resposta.send(resultados)
                resposta.render(
                    `produtos/lista`
                    , {
                        livros: resultados
                    }
                )
            }
        )

        conexao.end()

    })
}