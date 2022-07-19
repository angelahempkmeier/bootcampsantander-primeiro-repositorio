function verificaPalindromo(string){
    //primeiro verificar se a string existe
    if(!string) return //se ela nao existir, retorna. nao precisa de else pois o retorno sai da funcao

    //string.split("").reverse().join("") //split separa todas as letras. reverse é metodo do array, mas o split retorna array, dai ela vai reverter nossa palavra. com o .join junta todos os elementos numa string

    //agora precisamos ver se a string revertida é igual a string que revertemos

    return string.split("").reverse().join("") === string
}

console.log(verificaPalindromo("gato"))