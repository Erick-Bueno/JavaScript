const obje = [{
    "id": 1,
    "nome": "erick"
}]

const teste = obje.map(function(conteudo){
   return {
    "Nomee": conteudo.nome,
    "Idddd":conteudo.id
   }
})
console.log(teste)


const arr = [1,2,3,4,5,6]

const teste2 = arr.map(function(conteudo){
    return conteudo * 2
})
console.log(teste2[0])