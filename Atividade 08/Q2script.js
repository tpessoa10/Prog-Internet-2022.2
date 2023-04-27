document.addEventListener('DOMContentLoaded', function(){
    var botaoSomar = document.getElementById('BotaoSomar')
    botaoSomar.addEventListener('click', somarNumeros)
})

function somarNumeros(){
    var num1 = document.getElementById('CaixaDeNumero1').value
    var num2 = document.getElementById('CaixaDeNumero2').value
    var resultado
    if(isNaN(num1) || isNaN(num2)){
        alert('Valores inválidos digite números')
    }else{
        resultado = parseInt(num1) + parseInt(num2)
        document.getElementById('Resultado').innerHTML = `${resultado}`
    }

}