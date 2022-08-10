
let array = [1]
for(let c = 0; c < array.length; c = c + 1 ){
    if(num == array[c]){
        console.log("o valor ja foi adicionado tente outro")
    }else{
        array.push(num)
        console.log(array)
    }
}