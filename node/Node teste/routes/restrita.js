const express = require("express");
const router = express.Router();
//midleware
const userL = false
router.use("/restrita", function(req, res,next){
    if(!userL){
        res.redirect("/")
    }next()
})


router.get("/", function(req, res){
    res.send("pagina principal")
})

router.get("/restrita", function(req, res){
    res.send("pagina restrita")
})
router.get("/restrita/usuarios", function(req, res){
    res.send("users")
})
module.exports = router