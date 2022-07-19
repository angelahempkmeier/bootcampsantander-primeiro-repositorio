/*
Crie uma funcao que recebe o array alunos e um numero que irá representar a média final
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas sao maiores ou iguais à média final
Utilize a tecnica 'object destruturing' para manipular as propriedades desejadas de cada aluno
*/
const alunos = [
    {
        nome: 'Joao',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {   nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },
    {   nome: 'Miguel',
        nota: 3,
        turma: '2C',
    },
]

function alunosAprovados(arr, media){
    let aprovados = []
    for(let i = 0; i < arr.length; i++){
        //object destructuring, utilizando apenas as propriedades que queremos
        const {nota, nome} = arr[i]
        //antes do object destruturing tava assim:
        /*
        if(arr[i].nota >= media){
            aprovados.push(arr[i].nome)
        }
        */
       //após object destruturing
        if(nota >= media){
            aprovados.push(nome)
        }


    }
    return aprovados
}

console.log(alunosAprovados(alunos, 5))