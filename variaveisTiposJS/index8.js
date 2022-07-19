let frase = 'Olá, tudo bem?'

frase.split("") //separa todos os elementos da frase acima
frase.split(" ") //separa por espaço

frase.includes('tudo')//para saber se tem algo incluso na frase, ela retorna booleano true

frase.startsWith('O') //saber se começa com O, aqui diferencia maiusc de minusc

frase.endsWith('m')//retorna booleano false pois termiona com ?

frase.replace(',', '!') //muda virgula por ponto de exclamacao, só que isso retorna outra frase, outra string

let stringModificada = frase.replace(',', '!') //tenho outra frase agora, mas minha frase continua a mesma la do inicio