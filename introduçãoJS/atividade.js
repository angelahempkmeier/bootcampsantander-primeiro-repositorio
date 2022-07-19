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