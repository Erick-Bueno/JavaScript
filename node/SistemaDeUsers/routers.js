
const ex = require("express")
const app = ex()
const router = ex.Router()
const body = require("body-Parser")
const ficha = require("./models/ficha")
const bcrypt = require("bcrypt")
const mysql2 = require("mysql2")

//conectando com o mysql
const con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "sirlei231",
    database: "teste"
})

//configuração do body-parser
router.use(body.urlencoded({extended:false}))
router.use(body.json())

//rotas
router.get("/register", function(req, res){
    res.render("form")
})
router.post("/register", async function(req, res){
    //pegando dados do clientes
    const nomee = req.body.nome
    const senhaa = req.body.senha
    const emaill = req.body.email
    const cpff = req.body.cpf
    const sexoo = req.body.sexo
    //criptografando senha do cliente
    bcrypt.hash(senhaa, 10, async function(errBcrypt, hash){
        if(errBcrypt){
            return res.status(500).send({erro: errBcrypt})
        }try{
            //adicionando dados no database
            const dados = await ficha.create({
                nome: nomee,
                senha: hash,
                email: emaill,
                cpf: cpff,
                sexo: sexoo
        
            })
            //redirecionamento para tela de login
            res.redirect("/login")
            
        }
        catch(erro){
            res.status(401).send("erro:"+ erro)
        }
    })

    })
    
router.get("/login", function(req, res){
    res.render("")
})
//rota de login com mysql
router.post("/login", async function(req, res){
    await con.connect(function(error){
        if(error) throw error
        const sql = ""
        con.query(sql, function(error, results){
            if(error) throw error
            console.log(results)
        })
        con.end()
    })
    
})


    


module.exports = router
