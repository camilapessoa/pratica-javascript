const numero1 = +document.getElementById("numero1").value;
const numero2 = +document.getElementById("numero2").value;
const numero3 = +document.getElementById("numero3").value;
const checagem = document.getElementById('checagem')

function checaMaior() {
    const numeroMaior = Math.max(numero1, numero2, numero3);
    checagem.innerHTML = numeroMaior;
}