const btn = document.querySelector('#btn-form')
const input = document.querySelector('#sexor')
const resultado = document.querySelector('#resultado')

function validarSexor(el) {
    const value = el.value
    return(value.toLowerCase() === 'm' || value.toLowerCase() === 'f' ? true : false);
}

btn.addEventListener('click', () => {
    const validacao = validarSexor(input)
    if(validacao === true) {
        input.value === 'm' ? resultado.innerHTML = 'Macho!' : resultado.innerHTML = 'Fêmea!'
    }
})