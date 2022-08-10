const db = require("./conexaobd")

const Uf = db.banco.define("ufs", {
    nomeuf:{
        type: db.Sequelize.STRING
    },
    população:{
        type: db.Sequelize.BOOLEAN
    }
})

module.exports = Uf