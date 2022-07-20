//dado o array [30,30,40,5,223,2049,3034,5] retorne outro array apenas com valores unicos

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]
/* nao basta fazer assim como est´´a abaixo pois o exercico pede pra retornar outro array, e aqui ele está retornando um set
\/
function valoresUnicos(array){
    const mySet = new Set(arr)
    return mySet
}
*/

function valoresUnicos(arr){
    const mySet = new Set(arr)
    return [...mySet] //tecnica spread
}

console.log(valoresUnicos(meuArray))


