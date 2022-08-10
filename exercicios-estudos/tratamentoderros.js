num = 11
try {
    if(num <10){
        throw new Error("numero é igual a 10")
    }
} catch (e) {
    console.log("erro")
}
finally{
    console.log("valor passado foi:" + num)
}