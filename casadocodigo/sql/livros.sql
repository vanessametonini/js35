CREATE TABLE livros (
    id int(11) NOT NULL AUTO_INCREMENT,
    titulo varchar(255) DEFAULT NULL,
    descricao text,
    preco decimal(10,2) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO livros (titulo, descricao, preco)
VALUES ('Começando com nodejs', 'Livro Introdutório sobre nodejs', 39.90);

INSERT INTO livros (titulo, descricao, preco)
VALUES ('Começando com javascript', 'Livro Introdutório sobre javascript', 49.90);

INSERT INTO livros (titulo, descricao, preco)
VALUES ('Começando com express', 'Livro Introdutório sobre express', 39.90);