const { response } = require("express")
const express = require("express")
const router = express.Router()
const mysql = require("mysql2")
const controller = require("./Controllers/livros_controller")
const controller2 = require("./Controllers/alocacao_controller")

//mysql
const con = mysql.createConnection({
    host: "localhost",
    user: "root", 
    database:"teste",
    password: "sirlei231"
})

//rota produtos
//listar todos os livros

router.get("/livros", controller.GetLivros)
//listar livro especifico
router.get("/livros/:id", controller.GetLivroespecifico)

//deletar um livro
router.delete("/livros/:id", controller.DeletarLivro)
//adicionando livro
router.post("/livros", controller.AdicionarLivro)

//atualizando livros
router.put("/livros/:id", controller.AtualizarLivro)
    
    
//rotas de alocação

//listar alocações
router.get("/alocacao", controller2.listarTodasAlocacoes)

//listar alocação especifica
router.get("/alocacao/:id", controller2.ListarAlocacaoEspecifica)

//adicionar alocação
router.post("/alocacao", controller2.AdicionarAlocacao)
//deletar alocacao
router.delete("/alocacao/:id", controller2.DeletarAlocacao)
//atualizar pedido de alocação
router.put("/alocacao/:id", controller2.atualizarAlocacao)

//cadastro
router.post("/cadastro", async function(req, res){
    
})

module.exports = router