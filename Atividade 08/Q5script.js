document.addEventListener('DOMContentLoaded',function (){
    var botaoChecar = document.getElementById('checar')
    botaoChecar.addEventListener('click', checarMarcados)
})


function checarMarcados(){
    var c = 0
    for (let index = 0; index < 4; index++) {
        var input = document.getElementsByTagName('input')[index]
        if(input.checked == true){
            c++
        }
    }
    document.getElementById('resultado').innerHTML = `${c} Marcadas`
}