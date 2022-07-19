let nome = 'Joao'

//pra saber o que está no index 1
nome[1] //retorna o
nome.length //retorna 4, claro

let sobrenome = 'Pedro'
nome.concat(sobrenome) 
let concatenado = nome.concat(sobrenome)

concatenado = nome + " " + sobrenome //concatenando pra dar espaço retorna Joao Pedro
concatenado = nome + "\n" + sobrenome//pula uma linha
concatenado = `${nome} <br> ${sobrenome}` //novo jeito de concatenar com crase
