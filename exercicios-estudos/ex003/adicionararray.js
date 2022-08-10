let array = []
for(let c = 15; c <= 155; c = c +1){
    array.push(c)
}
console.log(array)

let array2 = []

for(i = 0; i < array.length; i = i + 1){
    if(array[i] % 3 === 0 && array[i] % 2 !== 0){
        array2.push(array[i])
    }
}
console.log(array2)