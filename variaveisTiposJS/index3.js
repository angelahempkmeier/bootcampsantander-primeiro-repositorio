var firstName = 'Joao'
var lastName = 'Souza' //se aqui fosse let em vez de var, o console retornaria tb Joao Souza como retorna com var, nao mudaria la dentro do if pq esse let tem que escopo global

if(firstName === 'Joao'){
    var firstName = 'Pedro'
    let lastName = 'Silva'
}

console.log(firstName, lastName)

//ele com o exemplo acima, retornaria Joao Souza, mas no meu node ta dando o problema: SyntaxError: Identifier 'firstName' has already been declared --- entendi meu erro: pq eu tinha posto tanto o var quanto o let dentro do if com o mesmo nome, firstName, sendo que o let era pra ser LastName - quando arrumei isso consertou de boas

//hoje em dia o normal é usar let pq é meio ruim ter variavel global, é perigoso
