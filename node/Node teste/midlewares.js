ex = require("express")
app = ex()


app.get('/', function(req, res){
    res.send("pagina principal")
})
app.get('/registro', function(req, res){
    res.send("pagina de registro")
})

//controle da rota, so ira acessar a rota /registro/nome se o nome for igual a erick
app.use("/registro/:nome", function(req, res, next){
    const nome = req.params.nome
    console.log("midleware")
    if(nome === 'erick'){
        next()
    }else{
        res.redirect("/")
    }
    
})

app.get("/registro/:nome", function(req, res){
    const nome = req.params.nome
    res.send(`parabens ${req.params.nome} voce logou com sucesso`)
})

app.listen(8087, function(){
    console.log("server run")
})