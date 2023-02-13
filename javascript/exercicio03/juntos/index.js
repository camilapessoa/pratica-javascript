//3 - Um veterinário precisa de um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Fêmea, M - Macho, entrada Inválida.

// entrada.toLowerCase() == "m" ? true : entrada.toLowerCase() == "f" ? true : alert("opção invalidade");
// const radioButtons = document.getElementsByClassName("sexo");

//botao
const btn = document.querySelector('#btn-sexo')

// evento de click do botao --> html
btn.addEventListener('click', obterSexoDoInput)


function validaSexo(entrada) {
    const entrada = document.getElementById("sexo-input");
    return entrada.toLowerCase() == "m" || entrada.toLowerCase() == "f" ? true : false;
}   

function obterSexo(entrada) {
    const entrada = document.getElementById("sexo-input");
    return ({
        "m": "Macho",
        "f": "Fêmea"
    })[(entrada.value || "").toLowerCase()];
}

// function RetornaMarcado(){
//     for (const radioButton of radioButtons) {
//         if (radioButton.checked) {
//             sexo.innerHTML = radioButton.value;
//             return radioButton.value;
//         }
//     }
// }

function Resultado() {
    const sexor = obterSexo()
    if(sexor === 'Macho'){
        
    }
}


function obterSexoDoInput() {
    var sexoDigitado = document.getElementById("sexo-input").value;
    if (ValidaSexo(sexoDigitado))
        RetornaMarcado();
}

window.onload = (event) => {
    const input = document.getElementById("sexo-input");
    input.addEventListener('change', function(evt) {
        const sexo = obterSexo(input.value) || 'Entrada Inválida';
        document.getElementById('saida').innerHTML = sexo;
    });
};