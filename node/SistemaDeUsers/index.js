const express = require("express")
const app = express()
const router = require("./routers")
const handle = require("express-handlebars")
const body = require("body-parser")
const ficha = require("./models/ficha")

app.use(express.static("public"))

//rota
app.use(router)
//configurando handlebars
app.engine("handlebars", handle.engine({defaultLayout:"main"}))
app.set("view engine", "handlebars")
//configurando bodyparser
app.use(body.urlencoded({extended:false}))
app.use(body.json())

//listar dados do banco
app.get("/listagem", function(req, res){
    ficha.findAll().then(function(registros){
        res.render("listagem",{registros: registros})
    })
})


app.listen(8089, function(){
    console.log("servidor ligado")
})
