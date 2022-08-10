let array5 = [1,2,5,6,100,2]
maior = 0 
menor = 0
for(let c = 0; c < array5.length; c = c + 1){
    if(c == 1){
        maior = array5[c]
        menor = array5[c]
    }else{
        if (array5[c] > maior){
            maior = array5[c]
        }if (array5 < menor){
            menor = array5[c]
        }
    }
}
//comparando o valor com o indice, primeiro for vai ate o maior valor do array segundo for vai passar pelos indices
let adicionar = 0
let array_ordem_crescente = []
for(let z = 0; z <= maior; z= z + 1){
   for(let x = 0; x < array5.length; x = x + 1){
        if(z == array5[x]){
            adicionar = array_ordem_crescente.push(z)
            
            
        }
   } 
} console.log(array_ordem_crescente)                                              

//--------------------------------------------------//


//let array6 = [1,-2,5,6,100,2]
//let maior2 = 0
//let menor2 = 0
//let i = 0
//while(i < array6.length){
    //if (i == 0){
        //maior2 = array6[i]
        //menor2 = array6[i]
    //}else{
        //if (array6[i] > maior2){
            //maior2 = array6[i]
        //}if (array6[i] < menor2){
            //menor2 = array6[i]
        //}
    //}i = i + 1
//}
