var select = document.getElementById('select')
var resultado = document.getElementById('resultado')
var texto = document.getElementById('texto')

select.addEventListener('change', (evento) =>{
    resultado.innerHTML = `<img src="${evento.target.value}" alt="">`
})
