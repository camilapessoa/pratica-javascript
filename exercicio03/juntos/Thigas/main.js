const inputPrincipal = document.querySelector("#input1")

const tratamentoDeTexto = (element) => {
    let valorDoInput = element.value;
    let test = document.querySelector(".test")

    valorDoInput[0].toLowerCase() == "m" || valorDoInput[0].toLowerCase() == "f" ? valorDoInput[0].toLowerCase() == "m" ? test.innerHTML = "macho"; alert("invalido"):valorDoInput[0].toLowerCase() == "f" ? test.innerHTML = "femea"; alert("invalido")

}

