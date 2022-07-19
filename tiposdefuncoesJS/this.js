//utilizar o metodo call e aply pra modificar o valor de this n funcao CalculaIdade. criar meus proprios objetos para essa atividade

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade. `
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30,
}
const pessoa2 = {   
    nome: 'Carla',
    idade: 26,
}

const animal = {
    nome: 'Fiona',
    idade: 5,
    raca: 'Pug',
}
//com call:
console.log(calculaIdade.call(pessoa2, 30))
//com apply
console.log(calculaIdade.apply(animal,[7]))