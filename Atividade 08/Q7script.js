document.addEventListener('DOMContentLoaded',function(){
    var botaoEnviar = document.getElementById('enviar')
    botaoEnviar.addEventListener('click', enviar)
})

function enviar(){
    var entrada = document.getElementById('entrada').value
    var elemento = document.createElement('option')
    elemento.innerHTML = `<option value="${entrada}">${entrada}</option>`
    document.getElementById('select').appendChild(elemento)
    
}