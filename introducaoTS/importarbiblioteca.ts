// criar arquivos typings.d.ts

import $ from 'jquery'


//especifico do jquery
$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova funcao')
    }
})

//$('input').novaFuncao //sem criar no typings.d.ts a interface do Jquery, ele nao puxa os metodos, entao criando...

$('body').novaFuncao()