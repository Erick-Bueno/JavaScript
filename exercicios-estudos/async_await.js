 function nomes(nome){
   return new Promise((resolve, reject) => {
        if(nome == "erick"){
            return resolve("seu nome é erick")
        }return reject("seu nome não é erick")
    })
     
}

async function rota(){
    try{
        const teste = await nomes('erick')
        console.log(teste)
    } catch (erro) {
        console.log(erro)
    }
}  

rota()




