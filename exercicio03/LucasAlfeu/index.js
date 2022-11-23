const inputText = document.getElementById('sexo')

const botao = document.getElementById('btn-verificar')

botao.addEventListener('click', () => {
    const trataTexto = inputText.toUpperCase()
    const arraySexo = trataTexto.split('')
    console.log(arraySexo[0])
})
