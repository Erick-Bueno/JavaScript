function api(id){
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
}

async function teste(){
    try {
    const conteudo = await api(1)
    const conteudo2 = await conteudo.json()
    console.log(conteudo2)
    } catch (error) {
        console.log(error)
    }


}
function teste2(){
    api(2).then(function(resultados){
       return resultados.json()
    }).then(function(resultados2){
        console.log(resultados2)
    }).catch(function(error){
        console.log(error)
    })
}
teste2()