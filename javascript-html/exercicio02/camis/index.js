function verificaValor(){
    const valor = parseInt(document.getElementById("valor").value);
    const resposta = document.getElementById("resposta");
    if(valor > 0){
        console.log(`O valor ${valor} é positivo`);
        resposta.innerText = `O valor ${valor} é positivo`;
    } else if (valor === 0){
        console.log(`O valor ${valor} é neutro`);
        resposta.innerText = `O valor ${valor} é neutro`;
    } else {
        console.log(`O valor ${valor} é negativo`);
        resposta.innerText = `O valor ${valor} é negativo`;
    }

}