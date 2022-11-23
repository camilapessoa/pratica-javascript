function verificaAnimal(){
    let sexo = document.getElementById("sexo").value
    let checagem = document.getElementById("checagem")

    if(sexo === "F"){
        checagem.innerText = "F - Fêmea"
    } else if (sexo === M){
       checagem.innerText = "M - Macho"
    }else {
        checagem.innerText= "Informação inválida"
    }
}

