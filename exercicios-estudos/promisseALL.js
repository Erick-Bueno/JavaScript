function p1(){
    return new Promise((resolve, reject) => {
        resolve("ok1")
    })
    
}
function p2(){
    return new Promise((resolve, reject) => {
        resolve("ok2")
    })
}

 function re(){
    return Promise.all([p1(),p2()])
}
async function rr(){
    const r = await re()
    console.log(r)
}
rr()
