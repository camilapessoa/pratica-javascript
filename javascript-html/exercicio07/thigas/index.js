const button = document.getElementById("checar")
console.log(button)
button.addEventListener("click", () => {
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);
    const numero3 = Number(document.getElementById("numero3").value);
    const maiorNumero = Math.max(numero1, numero2, numero3)
    const resultado = document.getElementById("resultado")
    resultado.innerHTML = maiorNumero
})