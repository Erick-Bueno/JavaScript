function a (id){
    const daado= fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    return daado
    
}


async function b (){
  try {
    const teste = await a(2)
    const dado = await teste.json()
    console.log(dado)
    
    
  } catch (error) {
    console.log(error)
  }
   
}
function c(){
  a(1).then(function(resultado){
    return resultado.json()
  }).then(function(dado){
    console.log(dado)
  })
}
c()