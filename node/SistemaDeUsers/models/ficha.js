const conexao = require("./conexãodb")

const Ficha = conexao.banco.define("fichas", {
    nome:{
        type: conexao.sequelize.STRING
    },
    senha:{
        type: conexao.sequelize.STRING
    },
    email:{
        type: conexao.sequelize.STRING
    },
    cpf:{
        type: conexao.sequelize.STRING
    },
    sexo:{
        type: conexao.sequelize.ENUM('F', 'M')
    }
})

module.exports = Ficha
