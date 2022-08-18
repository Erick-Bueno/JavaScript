function c (idade){
    return new Promise((resolve, reject) => {
        if(idade == 18){
            return resolve("voce tem 18 anos")
            
        }return reject ("voce não tem 18 anos")
    })
}
function e (){
}
c(18).then(function(deucerto){
    console.log(deucerto)
}).catch(function(error){
    console.log(error)
})
async function d (){
    try {
        const idade = await c(16)
        console.log(idade)
    } catch (error) {
        console.log(error)
    }
}

d() 
e()   
