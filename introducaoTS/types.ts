/*type iAnimal = {
    nome: string
    tipo: 'terrestre' | 'aquático'
    executarRugido(alturaEmDecibeis: number): void
}
*/

interface IAnimal {
    nome: string
    tipo: 'terrestre' | 'aquático'
    domestico: boolean
    
}

interface iFelino extends IAnimal{
    visaoNoturna: boolean
}

interface iCanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande'
}

type IDomestico = iFelino | iCanino

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
}