/* funcao receber um array e retorna-lo caso seu tamanho correnponda ao numero enviado como parametro da funcao. caso contrario, um erro será lançado
- criar uma funcao que recebe um array e um numero
- realizar as seguintes validacoes:
    - param nao forem enviados - erro reference error
    - array nao for object - type error
    - num n for number - type error
    - tamamho do array != do num enviado como parametro - range error
-  utilizar try catch
- filtre as chamadas de catch utilizando instanceof
*/

function validaArray(arr,num){
    try{
        if(!arr && !num) throw new ReferenceError('Envie os parâmetros')
    
        if(typeof(arr) !== 'object') throw new TypeError('Array precisa ser do tipo object')
    
        if(typeof(num) !== 'number') throw new TypeError('Número precisa ser do tipo número')
    
        if(arr.length !== num) throw new RangeError('O tamanho do array precisa ser do tamamho do número')

        return arr
    
    }catch(e) {
        //tratando erros

        //se o erro for uma instancia de referenceerror:
        if(e instanceof ReferenceError){
            console.log('Este erro é um ReferenceError')
            console.log(e.message)
            console.log(e.stack)
        }else if(e instanceof TypeError){
            console.log('Este erro é um TypeError')
            console.log(e.message)
            console.log(e.stack)
        }else if(e instanceof RangeError){
            console.log('Este erro é um RangeError')
            console.log(e.message)
            console.log(e.stack)
        }else {
            console.log('Ocorreu um tipo de erro não esperado:' + e)
        }
    }
     
}

console.log(validaArray([1,2,3,4,5]))

