const nome = "        erick      "
// remover espaços
const novoNome = nome.trim()
console.log(novoNome)
//adicionar elementos no meio do array
const arr = [1,2,3,4,5,6]
arr.splice(4,0,55) //(indice de onde vc quer adicionar o novo valor, se algum valor vai ser deletado, o valor)
console.log(arr)

console.log(arr.slice(6,7))