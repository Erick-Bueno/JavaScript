

function compareTrue(girafa, bode){
    if(girafa && bode == true){
       console.log (true)
       return true
    }if(girafa == true && bode == false){
        console.log(false)
        return false
    }if(bode && bode == false){
        console.log(false)
        return false
    }
}
//compareTrue(true, false)

let array = []
let cortar = 0
function texto(frase){
   
    frase = frase.toString().replace(" ", ",")
    cortar = frase.split(",")
    return cortar
    
}

texto("ola caralho")