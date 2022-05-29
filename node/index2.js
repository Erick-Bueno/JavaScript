var ex = require("express")

var app = ex()

app.get("//:home", function(req, res){
    res.send(`ola mundo, meu nome é ${req.params.home}`)
})

app.listen(8081, function(){
    console.log("servidor criado com sucesso e rodando")
})