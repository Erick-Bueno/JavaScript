const Sequelize = require("sequelize")
const banco = new Sequelize("teste", "root", "sirlei231", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    banco: banco
}