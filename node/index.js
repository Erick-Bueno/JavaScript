let ex = require("express");

let progam = ex()


progam.get("/",function(req, res){
    res.sendFile(__dirname + "/sites/index.html")
});

progam.get("/sobre",function(req, res){
    res.sendFile(__dirname + "/sites/index2.html")
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
