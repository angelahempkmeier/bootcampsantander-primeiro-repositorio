interface cachorro {
    nome: string,
    idade: number,
    parqueFavorito?: string
}

//valores somente leitura e remover valores adicionais:
type cachorroSomenteLeitura = {
    +readonly [K in keyof cachorro]-?: cachorro[K]
}

class meuCachorro implements cachorro {
    nome
    idade

    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
}

const cao = new meuCachorro('Apolo',14)

