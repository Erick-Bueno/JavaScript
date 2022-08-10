const db = require('./conexaobd')

const Cadastro = db.banco.define("cadastros",{
    nome:{
        type: db.Sequelize.STRING
    },
    idade:{
        type: db.Sequelize.INTEGER
    }
})


module.exports = Cadastro