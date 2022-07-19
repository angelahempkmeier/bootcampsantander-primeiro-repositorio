let array = [] //também da pra declarar como let array = new Array()

array.push(3) //adiciona itens, sempre ao final
array.push(2)

console.log(array)

//para tirar numeros

array.pop() //tira do final do array
console.log(array)

array.push(2)
array.push(5)

//para tirar o 3
array.shift()

console.log(array)

array.unshift(1)
console.log(array)

let resp = array.includes(10)
console.log(resp)