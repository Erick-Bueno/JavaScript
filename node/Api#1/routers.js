const express = require("express")
const router = express.Router()
const mysql = require("mysql2")


//mysql
const con = mysql.createConnection({
    host: "localhost",
    user: "root", 
    database:"teste",
    password: "sirlei231"
})

//rota produtos
//listar todos os livros

router.get("/livros", async function(req, res){
    try {
        function select_all(){
            return new Promise((resolve, reject) => {
                con.query('select * from livros', function(error, results){
                    if(error){
                        return reject(error)
                    }return(resolve(results))
                    
                })
            })
        }
      const dadoss = await select_all()
      const resposta = {
        'messagem':"Listando todos os livros",
        dados: dadoss.map(function(liv){
            return{
                'id': liv.id,
                'nome':liv.Nome,
                'autor': liv.Autor,
                'preço':liv.Preço,
                request:{
                    'tipo': 'GET',
                    'descrição':'Retorno de livro especifico',
                    'URL': `http://localhost:8088/livros/${liv.id}`
                }
                
            }
        })
      }
      res.send(resposta)
    } catch (error) {
        res.status(404)
    }
})
//listar livro especifico


    router.get("/livros/:id", async function(req, res){
    try {
        const id = req.params.id
        function select_one(){
            return new Promise((resolve, reject) => {
                con.query(`select Nome, Autor, Preço from livros where id =${id} `,function(error,results){
                    if(error){
                        return reject(error)
                    }return resolve(results)
                })
               
            })
        }const dadoss = await select_one()
        if(dadoss.length == 0){
            return res.status(200).send("livro não encontrado")
        }else{
            const resposta = {
                'mensagem': 'Listando livro especifico',
                 dados: dadoss.map(function(liv){
                    return{
                        'id': id,
                        'nome': liv.Nome,
                        'autor':liv.Autor,
                        'preço':liv.preço,
                        'request':{
                            'tipo': "GET",
                            'descrição': "Retorno de todos os livros",
                            'Url':'http://localhost:8088/livros'
                        }
                    }
                 })
                 
            }
           res.status(200).send(resposta)
        }
        
    }catch (error) {
    res.status(400).send({'erro': error})
}
})

//deletar um livro
router.delete("/livros/:id", async function(req, res){
try{
    const id = req.params.id
    function verificar_id(){
        return new Promise((resolve, reject) => {
            const sql = `select * from livros where id = ${id}`
            
            con.query(sql, function(error, results){
                if(error){
                    return reject(error)
                }return resolve(results)
                
            })
        })
    }
    function delete_book(){
        return new Promise((resolve, reject) => {
            const sql = `delete from livros where id = ${id}`
            con.query(sql, function(error,results){
                if(error){
                    return reject(error)
                }return resolve(results)
            })
         
        })
    }
    const idd = await verificar_id()
    if(idd.length == 0){
        res.status(400).send({mensagem: "id não existe"})
    }else{
    const dados = await delete_book()
    const dadoss = {
        'mensagem':'livro deletado',
        'request':{
            'tipo': "POST",
            'descrição': "adicionar novo livro",
            'Url': "http://localhost:8088/livros"
        }
    }
    res.status(200).send(dadoss)
}
}catch(error){
    res.send(error)
}
})
//adicionando livro
router.post("/livros", async function(req, res){
    const {nome,autor, codigo,preço } = req.body
    function add_livro(){
        return new Promise((resolve, reject) => {
            const sql = `inserte into livros (Nome, Autor, Codigo, Preço) Values()`
        })
    }
})
    //atualizando livros
    router.put("/livros/:id", async function(req, res){
        const id = req.params.id
        const { nome, autor, codigo, preço } = req.body
        await con.connect(function(error){
            if(error) throw error
            sql = `UPDATE livros set Nome = '${nome}', Autor = '${autor}', Preço = '${preço}', Codigo = '${codigo}' where id = ${id}`
            con.query(sql, async function(error, results){
                if(error) throw error
                if(error){
                    return res.status(500).send({message: error})
                }const reposta = {
                    'mensagem':"livro atualizado",
                    'id_livro':results.insertId,
                    'nome':nome,
                    'autor': autor,
                    'codigo': codigo,
                    'preço':preço,
                    'request':{
                        'tipo':"GET",
                        'descrição':"Retorno do livro especifico",
                        'url':`http://localhost:8088/livros/${id}`
                    }

                }
                return res.status(200).send({message: "produto atualizado"})
            })
        })
    })

module.exports = router