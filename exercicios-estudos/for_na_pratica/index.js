//criando array
const arr = ['laranja', 'banana', 'amora', 'limão']
//criando tag ul, lista n ordenada
let lista = document.createElement("ul")
//pegando o lugar que queremos colocar essa lista, nesse caso o body
let body = document.getElementsByTagName("body")
//adicionando a lista dentro do body, body[0] = so a tag body
body[0].appendChild(lista)

console.log(body[0])
for(let c = 0; c < arr.length; c = c + 1){
    //criando elemento li e adicionando na lista
    let li = document.createElement("li")
    lista.appendChild(li)
    //adicionando os dados do array na lista
    let text = document.createTextNode(arr[c])
    li.appendChild(text)
    
}
console.log(body[0])

