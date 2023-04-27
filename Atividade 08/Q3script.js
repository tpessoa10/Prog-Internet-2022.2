document.addEventListener('DOMContentLoaded', function(){
    var botaoCarregar = document.getElementById('carregar')
    botaoCarregar.addEventListener('click', adicionarElemento)
})

function adicionarElemento(){
    var texto = document.getElementById('texto').value
    var img = document.createElement('img')
    img.src = texto
    document.getElementById('resultado').appendChild(img)
}