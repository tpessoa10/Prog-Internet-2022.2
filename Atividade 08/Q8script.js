

const textoEntrada = document.getElementById('entrada');
const botaoAdicionar = document.getElementById('enviar');
const select = document.getElementById('select');
const TextosAdicionados = []

botaoAdicionar.addEventListener('click', () => {
  const novoTexto = textoEntrada.value;
  
  if (novoTexto !== '' && !TextosAdicionados.includes(novoTexto) && select.options.length < 5) {
    const novaOpcao = document.createElement('option');
    novaOpcao.text = novoTexto;
    select.appendChild(novaOpcao);
    TextosAdicionados.push(novoTexto);
  }
});








