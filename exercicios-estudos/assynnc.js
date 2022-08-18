function sum (n, n2){
    const resultado = n - n2
    return new Promise((resolve, reject) => {
        if(resultado < 0){
            return reject("deu erro na soma")
        }return resolve(resultado)
    })
}

async function teste (){
    try {
        const soma = await sum(1, 5)
    console.log(soma)
    } catch (error) {
        console.log(error)
    }
    
}
function teste2(){
    sum(1,2).then(function(results){
        console.log(results)
    }).catch(function(error){
        console.log(error)
    })
}
teste2()





