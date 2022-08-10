numero = 1
function fatorial(n){
    for(let c = n; c >= 1; c = c -1){
        numero = numero * c
        console.log(c, "x")
    }
}

fatorial(5)