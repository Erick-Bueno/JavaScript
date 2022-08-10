const express = require("express")
const app = express()


const lista = [ "meu malvado favorito", "pequeno principe"]

//listar todos os livros
app.get("/livros", function(req, res){
    return res.json(lista)
})
//listar livro especifico
app.get("/livros/:id", function(req, res){
    const id = req.params.id
    return res.json(lista[id])
})
//adicionar novo livro
app.post("/livros", function(req, res){
    const name = req.body
    lista.push(name)
    return res.json(name)
})
app.delete("/livros/:id", function(req, res){
    const index = req.params.id
    lista.splice(index, 1)
    return res.json("excluido com sucesso")
})

app.put("/livros/:id", function(req, res){
    const id = req.params.id
    const name = req.body
    lista[id] = name
    return res.json(lista)
})

app.listen(8088, function(){
    console.log("servidor rodando...")
})