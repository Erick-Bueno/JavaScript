



function arrai(array){
    let ultimovalor = array[array.length - 1]
    let primeirovalor = array[0]

    array.unshift(ultimovalor)
    array.pop(ultimovalor)
    array.push(primeirovalor)
    console.log(array[0], array[array.length - 1])

}


 arrai([1,2,3,4,100])


 array = ["lucas","marcoss",3,4,'manel']

 for(let c = 0; c < array.length; c = c + 1){
    
        console.log(array[array.length - 1], 'e', array[0])
        break
    
    
 }