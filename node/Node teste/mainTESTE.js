const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const body = require("body-parser")
const Uf = require("./models/tabelateste")
const rest = require("./routes/restrita")

app.get("/", function(req, res){
    res.send("pagina principal")
})

app.get("/:genero", function(req, res){
    const generos = ["acao", "aventura","fps"]
    if(generos.includes(req.params.genero)){
      res.send("genero:" + req.params.genero)
    }else{
      res.status(404).send("erro")
    }
    res.send("genero:" + req.params.genero)
})
app.get("/:genero/:nome", function(req, res){
    const nomes = ["csgo", "Lol", "wow"]
    if(nomes.includes(req.params.nome)){
        res.send("nome:" + req.params.nome + "<br>genero:" + req.params.genero)
    }
    else{
        res.status(404).send("errro")
    }
})

app.listen(8083, function(){
    console.log("servidor ligado")
})