//4 - Faça um Programa que verifique se uma letra digitada é vogal ou consoante.
function verificaLetra(){
    let letra = document.getElementById("letra").value
    let checagem = document.getElementById("checagem")
    const vogais = "aeiou"
    const consoantes = "bcdfhklmnpqrstvwxyz"

    if(vogais.includes(letra.toLowerCase())){
        checagem.innerHTML = `A letra ${letra} é uma vogal`
    }else if (consoantes.includes(letra.toLowerCase())){
        checagem.innerHTML = `A letra ${letra} é um consoante`
    }else{
        checagem.innerHTML = `Desconhecido. Insira uma letra`
    }
    
}

//uppercase tolowercase
//inserir validação com includes em uma variável 