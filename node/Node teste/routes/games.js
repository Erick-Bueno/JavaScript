const express = require("express")
const router = express.Router();

router.get("/", function(req, res){
    res.send("pagina de games")
})
router.get("/acao", function(req, res){
    res.send("jogos de ação")
})
router.get("/acao/LeagueOfLegnds", function(req, res){
    res.send("pagina do lol")
})

module.exports = router