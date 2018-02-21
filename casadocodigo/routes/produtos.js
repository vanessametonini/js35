module.exports = app => {
    app.get('/produtos',(requisicao, resposta) => {
 
        const mysql = require('mysql')

        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'casadocodigo'
        })

        connection.query(
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

        connection.end()

    })
}