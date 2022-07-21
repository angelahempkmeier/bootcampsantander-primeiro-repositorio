//nao deu certo
//https://github.com/stebsnusch/basecamp-javascript/tree/main/javascript-assincrono

const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
const catBtn = document.getElementById('change-cat')

//funcao como arrow function
const getCats = async () => {
    try {
        const data = await fetch(BASE_URL)
        const json = await data.json()

        return json.webpurl //retornando esse webpurl que é dado la no link acima pra ser uma imagem comprimida
    }
    catch(e){
        console.log(e.message)
    }
}

const loadImg = async () => {
    const catImg = document.getElementById('cat')
    catImg.src = await getCats() //para retornar a imagem
}

catBtn.addEventListener('click', loadImg) //pra logar uma imagem

loadImg() //pra começar com a imagem logada


//aquela parte do try catch sem ser com try catche fica:
/* 
    const data = await fetch(BASE_URL)
    .then(res=> res.json())
    .catch(e => console.log(e))

    return data.webpurl
*/