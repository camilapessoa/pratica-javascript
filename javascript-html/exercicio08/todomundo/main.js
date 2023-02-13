const numerosEmOrdem = document.getElementById("numOrdenados")
const btnOrdenar = document.getElementById("btnOrdenar")

btnOrdenar.addEventListener("click", () => {
    const numero1 = document.getElementById("num1").value
    const numero2 = document.getElementById("num2").value
    const numero3 = document.getElementById("num3").value
    const arrayNumeros = [numero1, numero2, numero3]
    let numeroDecrescente = arrayNumeros
    numeroDecrescente.sort((a, b) => b - a)
    numerosEmOrdem.innerHTML = ""
    numeroDecrescente.forEach((e) => {
        numerosEmOrdem.innerHTML += `${e} `;
    })
})

btnOrdenar.addEventListener("click", () => {
const numeroCrescente = arrayNumero.sort((a, b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
})
const numeroDecrescente = numeroCrescente.reverse();
numerosEmOrdem.innerHTML = ""
    numeroDecrescente.forEach((e) => {
        numerosEmOrdem.innerHTML += `${e} `;
    })
})
