let anyEstáDeVolta: any
let unknowValor: unknown
unknowValor = 1
unknowValor = 'any'
unknowValor = true
unknowValor = 5
let StringTeste2: string = 'agora vai'

//StringTeste2 = unknowValor //da erro, diferente do any.

if(typeof unknowValor === 'string'){
    StringTeste2 = unknowValor
}

function jogaErro(erro: string, codigo: number): never {
    throw (error: erro, code: codigo)
}

jogaErro('deu erro', 500)

