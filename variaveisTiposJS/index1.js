//hoisting
numberOne = 1 //é uma atribuicao, nao declaracao
console.log(numberOne + 2)  
var numberOne //agora to falando que o numberOne existe

//se esconder o var numberOne, mesmo assim, executando o NodeJS, vai aparecer o resultado 3 da chamada do console