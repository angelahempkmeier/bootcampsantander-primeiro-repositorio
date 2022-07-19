//feito por mim, nao concatenei
/*
function soma(n1,n2){
    var soma = n1 + n2
    if(n1 == n2){
        console.log(`Os números ${n1} e ${n2} são iguais.`)
    }else {
        console.log(`Os números ${n1} e ${n2} são diferentes.`)
    }

    if(soma>10){
        if(soma<20){
            console.log(`Sua soma é maior que 10 e menor que 20.`)
        }else if(soma>20){
            console.log(`Sua soma é maior que 10 e maior que 20.`)
        }
    }else if(soma<10){
        console.log(`Sua soma é menor que 10 e menor que 20.`)
    }
}

var res = soma(2,3)
*/

//feito como a professora

function comparaNumeros(num1, num2){
    if(!num1 || !num2){ //isso faz com que o zero nao possa fazer parte pq ele é considerado um numero vazio, entao teria que fazer o teste com null e undefined
        return 'Defina dois números'
    }
    //jeito um{
        /*const saoIguais = num1 === num2
    const soma = num1 + num2*/

        /*if(saoIguais){
            return 'São iguais'
        }
         return 'Não são iguais'*/

         //fazendo com if ternário:

    //return saoIguais ? "São iguais" : "não são iguais" //se sao iguais é vdd ele retorno sao iguais senao retorna nao sao iguais

    const primeiraFrase = criaPrimeiraFrase(num1,num2)
    const segundaFrase = criaSegundaFrase(num1,num2)
    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1,num2){
    let saoIguais =  ''
    if(num1 !== num2){
        saoIguais = 'não'
    }
    return `Os números ${num1} e ${num2} 
    ${saoIguais} são iguais`

}

function criaSegundaFrase(num1,num2){
    const soma = num1 + num2

    let resultado10 = 'menor'
    let resultado20 = 'menor'
    const compara10 = soma > 10
    const compara20 = soma > 20

    if(compara10){
        resultado10 = 'maior'
    }

    if(compara20){
        resultado20 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`
}




console.log(comparaNumeros(1,2))