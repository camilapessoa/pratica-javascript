const button =document.querySelector("#botao")
const verificador = () => {
    let caracteri = document.querySelector("#verificador").value.toLowerCase()
    const vogais = ["a", "e", "i", "o", "u"]
    const consoantes = ["b", 'c', 'd', 'f', 'g',"h", 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
    for (let i = 0; i < consoantes.length; i++) {
        if (caracteri[0].includes(consoantes[i])) {
            alert("é uma consoante")
            break;
        }else if(i < vogais.length && caracteri[0].includes(vogais[i])) {
                alert("é uma vogal")
                break;
        }
    }
}
button.addEventListener("click",verificador)
