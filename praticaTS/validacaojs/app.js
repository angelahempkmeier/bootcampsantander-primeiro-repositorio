//minha versão funcao soma, tinha esquecido do input
/*
let button = document.getElementById('button')
button.addEventListener('click', soma)

function soma(a,b) {
    return a + b
}

console.log(soma(1,2))
*/
let button = document.getElementById('button')
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')

function somarNumeros(numero1,numero2) {
    if(typeof numero1 === 'number' && typeof numero2 === 'number') {
        return numero1 + numero2
    } else{
        return Number(numero1) + Number(numero2)
    }
}

button.addEventListener('click', () => {
    console.log(somarNumeros(input1.value, input2.value))
}

)

