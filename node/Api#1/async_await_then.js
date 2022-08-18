 function teste(id){
    const dado = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(function(content){
        return content.json()
    })
    .then(function(dados){
        console.log(dados)
    })

}
teste(1)

async function dadoo(id){
const dado = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
const dados = await dado.json()
console.log(dados)
}
dadoo(3)
    