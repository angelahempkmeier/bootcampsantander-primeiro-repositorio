interface IAnimal {
    nome: string
    tipo: 'terrestre' | 'aquático'
    //executarRugido(alturaEmDecibeis: number): void
}

interface iFelino extends IAnimal{
    visaoNoturna: boolean
}

//const animal: IAnimal = {
    //ctrl + barra para mostrar tipos possiveis
   // nome: 'Elefante',
    //tipo: 'terrestre' //nao posso colocar valor que nao foram definidos na interface
    //executarRugido(alturaEmDecibeis) => (`${alturaEmDecibeis}`)
//}

//animal.executarRugido('s') //aceita apenas

const felino: iFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true
}