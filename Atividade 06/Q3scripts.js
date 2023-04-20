var botao = document.getElementById("botao");
botao.addEventListener("click", function() {
    var paragrafo = document.getElementById("paragrafo");
    paragrafo.textContent = "O texto deste parágrafo foi alterado!";
})

var limpar = document.getElementById("limpar")
limpar.addEventListener("click", function(){
    var paragrafo = document.getElementById("paragrafo")
    paragrafo.textContent = ""
})

/*Questao 04 - textContent altera apenas texto ignorando tags HTML, enquanto innerHTML é capaz de alterar alem
de texto, elementos HTML*/
