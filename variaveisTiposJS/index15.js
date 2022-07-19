let obj = {}

obj.name = 'julia' //objeto tem uma chave chamada name com o valor julia
obj.age = 20 //agora tem a chave age valendo 20

Object.values(obj) //aqui eu vejo os valores dentro do obj
Object.keys(obj) //mostra as chaves

//outra forma de declaracao

let pessoa = {
    name: 'Julia',
    age: 20,
    address: 'Rua 2'
}

//console.log(pessoa)

pessoa.name //retorna o nome

pessoa["name"] //retorna o nome

//posso declarar assim tb:
pessoa["numberOfSiblings"] = 3

//criando uma chave após a declaracao:
let mom = "nameOfMom"

pessoa [mom] = "Maria" //colocou o nome da mom de maria

console.log(pessoa)
