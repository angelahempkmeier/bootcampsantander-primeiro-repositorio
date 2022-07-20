//2. crie uma funcao que receba uma lista de precos e um numero representando o saldo disponivel. calcule qual sera o saldo final apos subtrair todos os precos da lista enviada

const lista = [
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    },
]

const saldoDisponivel = 100

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev,current, index){
        console.log('rodada', index+1)
        console.log(prev)
        console.log(current)
        return prev - current.preco //tem que ser .preco porque o current ta pegando todo o item do array
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista))