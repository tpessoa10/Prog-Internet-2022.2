document.addEventListener('DOMContentLoaded', function () {
    var botaoExibir = document.getElementById('botaoExibir');
    botaoExibir.addEventListener('click', exibirConteudo);
});

function exibirConteudo() {
    var conteudo = document.getElementById('caixaDeTexto').value;
    if(conteudo.length == 0){
        alert('Campo vazio insira um valor')
    }
    document.getElementById('conteudo').innerHTML = conteudo;
}