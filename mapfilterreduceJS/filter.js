// filtre e retorne todos os numeros pares de um array

function filtraPares(arr){
    return arr.filter(callback)
}

function callback(item){
    return item % 2 === 0
}

const meuArray = [1, 33, 55, 2, 4, 6, 9]

console.log(filtraPares(meuArray))
