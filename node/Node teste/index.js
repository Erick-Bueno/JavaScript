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
express.get("/inicio", async function(req, res){
    try {
        const cadastro = await Cadastro.findAll()
        res.render("home",{cadastro:cadastro}) 
    } catch (error) {
        return res.status(404).send(error)
    }
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
express.get("/deletar/:id", async function(req, res){
    try {
    const id = req.params.id
    const excluir = await Cadastro.destroy({where:{'id': id}})
    res.send("registro deletado")
    } catch (error) {
    return res.status(500).send(error)
    }
    
})
//ligando servidor
express.listen(8081, function(){
    console.log("servidor ligado")
})