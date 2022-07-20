//criar uma funcao que retorne o nome dos membros de um map que tem o papel 'ADMIN' no sistema
//1.crie uma funcao getAdmin que recebe um ap
//2. crie um map e populeo-o com nomes de usuarios e seus papeis no sistema (ex. 'luiz' => 'admin')
//3. dentro de getAdmin utilize o loop for...of para retornar uma lista com os nomes dos usuarios que sao administradores

function getAdmins(map) {
    let admins = []
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins

}

const usuarios = new Map()
usuarios.set('Luiz', 'Admin')
usuarios.set('Stephany', 'Admin')
usuarios.set('Jorge', 'User')
usuarios.set('Nathalia', 'Admin')

console.log(getAdmins(usuarios))