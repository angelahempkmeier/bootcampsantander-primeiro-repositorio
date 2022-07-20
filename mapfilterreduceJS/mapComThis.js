//pratique a sintae de multiplicacao de numeros uma vez utilizando o parametro this de um obj criado por vc e depois sem ele
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg){
    return arr.map(function(item){
       return item*this.value 
    }, thisArg)
}

const nums = [1,2]


console.log('this -> maca', mapComThis(nums, maca))
console.log('this -> laranja', mapComThis(nums, laranja))