interface IUsuario {
    id: string,
    email: string,
    cargo?: 'funcionário' |'gerente' | 'coordenador' | 'supervisor'
}

function redirecionePessoa(usuario: IUsuario){
    if(usuario.cargo){
        //redirecionePessoa(usuario.cargo)
    }

    //redirecionar para a area do usuario
}