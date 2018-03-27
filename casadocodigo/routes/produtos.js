let connectionFactory = require('../infra/connectionFactory'),
    produtos = require('../infra/produtos')

module.exports = app => {
    app.get('/produtos',(requisicao, resposta) => {
         
        let conexao = connectionFactory()
        , produtosNoBanco = produtos(conexao)

        produtosNoBanco.lista(
            (erro, resultados, campos) => {
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