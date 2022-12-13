const numero1 = Number(document.getElementById("numero1").value);
const numero2 = Number(document.getElementById("numero2").value);
const numero3 = Number(document.getElementById("numero3").value);
const checagem = document.getElementById('checagem')

const numeros = [numero1, numero2, numero3];
// olha que coisa feia de se ler
// não usem reduce crianças
const maiorNumeroParaAiramComCarinho = numeros.reduce((acc, cur, init) => (cur > acc) ? cur : acc);

function checaMaior() {
    const numeroMaior = Math.max(numero1, numero2, numero3);
    checagem.innerHTML = numeroMaior;
}

//CÓdigo do thigaS
const button = document.getElementById("checar")
button.addEventListener("click", () => {
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);
    const numero3 = Number(document.getElementById("numero3").value);
    const maiorNumero = Math.max(numero1, numero2, numero3)
    const resultado = document.getElementById("resultado")
    maiorNumero.innerHTML = maiorNumero
})

// não usem reduce!
// Não sei o que é reduce tambem =C