function verificarLetra() {
    const texto = document.querySelector('#resultado')
    const inputTexto = document.querySelector('#inputDados')
    const letra = inputTexto.value
    const vogais = ['a', 'e', 'i', 'o', 'u']

    const verifica = vogais.indexOf(letra)
    
    if (verifica === -1) {
        texto.textContent = `${letra} é consoante`
    } else {
        texto.textContent = `${letra} é vogal`
    }
}