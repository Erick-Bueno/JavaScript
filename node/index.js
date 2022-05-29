var ex = require("express");

var progam = ex()


progam.get("/",function(req, res){
    res.send("ola mundo")
});

progam.get("/home",function(req, res){
    res.send("pagina inicial")
})

progam.get("/ola/:nome/:idade", function(req, res){
    res.send(`ola ${req.params.nome} voce tem ${req.params.idade} de idade`)
})

progam.get("/hello/:palavra", function(req, res){
    res.send(`hello ${req.params.palavra}`)
})

progam.listen(8081, function(){
    console.log("servidor conectado")
})
