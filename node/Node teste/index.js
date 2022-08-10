const ex = require("express")
const express = ex()
const handle = require("express-handlebars")
const body = require("body-parser")
const Cadastro = require("./models/Cadastro")
const games = require("./routes/games")
const rest = require("./routes/restrita")

//configurando uso de css e js proprio da pagina
express.use(ex.static("public"))

//rota de teste Restrita com router usando midleware
express.use(rest)

//rota de teste com router

express.use("/jogos",games);

//configurando handlebars
express.engine("handlebars", handle.engine({defaultLayout:"main"}))
express.set("view engine", "handlebars")

//configurando bodyparser
express.use(body.urlencoded({extended: false}))
express.use(body.json())

//rotas

//listando dados do banco na pagina
express.get("/inicio", function(req, res){
    Cadastro.findAll().then(function(cadastros){ //pegando os dados da tabela Cadastro
        res.render("home",{cadastros: cadastros}) //enviando oos dados para a pagina respectiva do handlebars
    })
})



express.get("/ficha", function(req, res){
    res.render("formulario")
})

express.post("/dados", function(req, res){
   const nomee =  req.body.nome
   const idadee = req.body.idade
   Cadastro.create({
    nome: nomee,
    idade: idadee
   }).then(function(){
    res.redirect("/inicio")
   }).catch(function(erro){
    res.send("erro ao cadastrar usuario:" + erro)
   })

 
    
})
//ligando servidor
express.listen(8081, function(){
    console.log("servidor ligado")
})