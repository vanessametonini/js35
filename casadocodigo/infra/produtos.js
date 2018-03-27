module.exports = function(conexao){

    this.lista = function(callback) {
        
        conexao.query(
            'SELECT * FROM livros'
            , callback
        )
    }

    return this
}