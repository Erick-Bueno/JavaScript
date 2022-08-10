const Sequelize = require("sequelize")
const banco = new Sequelize(" ", "root", "sirlei231", {
    host: "localhost",
    dialect: "mysql"
})