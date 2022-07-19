function verificaPalindromo2(string){
    if(!string) return "string inexistente"

    for(let i = 0; i < string.length /2; i++){
        //a string.length vai ate a metade pq a gente compara uma metade com a outra metade da palavra...
        if(string[i] !== string[string.length - 1 - i]){ //se o primeiro ta sendo comparado com o ultimo, tem que depender de i tb senao sempre vai ate simplesmente o ultimo caractere.
            return false
        } 
    }
    return true
}

console.log(verificaPalindromo2("gato"))

//deu false numa primeira tentativa pra ABBA pq la em cima no if ele tava pegando o NUMERO string, o numero do indice, e nao a string daquele indice em si. e eu entendi!!!! obg guanabara te amo

