const obj = {
    nome: "Erick",
    idade:"19",
    olamundo: function(){
        return "ola " + this.nome + " voce tem " + this.idade + " anos"
    },
    aniversario: function(){
        this.idade = parseInt(this.idade) + 1
    }
}

console.log(obj.idade)
obj.aniversario()
obj.aniversario()
console.log(obj.idade)