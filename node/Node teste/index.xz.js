let array = [{
    nome: "erick",
    id: 1
}]
const dados = array.map(function(dado){
   return {
    "nome": dado.nome,
    "iid": dado.id
   }
})

let arr = [1,2,3,4]

const daddos = arr.map(function(resultados){
    return resultados * 2
})

for(let c = 0; c < 4; c = c + 1){
    console.log(daddos[c])
}


