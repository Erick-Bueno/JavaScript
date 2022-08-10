const express = require("express")
const handle = require("express-handlebars")
const body = require("body-parser")
const app = express()
const router = require("./routers")



//handlebars
app.engine("handlebars", handle.engine({defaultLayout:"main"}))
app.set("view engine", "handlebars")
//usar arquivo css e js proprio
app.use(express.static('Public'))
//bodyparser
app.use(body.urlencoded({extended:false}))
app.use(body.json())

//rotas
app.use(router)


//ligando servidor
app.listen(8085, function(){
    console.log("servidor iniciado")
})