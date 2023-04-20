document.getElementById('enviar').onclick = function (){
    var id = document.getElementById('nome').value
    document.getElementsByTagName("h1")[0].innerHTML = `Bem vindo ${id}` 
}

