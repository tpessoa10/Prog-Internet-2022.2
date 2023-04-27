var select = document.getElementById('select')
var resultado = document.getElementById('resultado')

select.addEventListener('change', (evento) => {
    var texto = document.getElementById('entrada').value
    if(evento.target.value == 'maiusculo'){
        resultado.innerHTML = `${texto.toUpperCase()}`
    }else if(evento.target.value == 'minusculo'){
        resultado.innerHTML = `${texto.toLowerCase()}`
    }    
})
