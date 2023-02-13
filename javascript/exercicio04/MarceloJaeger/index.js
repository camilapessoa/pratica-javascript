
function verificaLetra(){
    let letra = letra.value;
    let isLetra = [/a-zA-Z/]+$/i.test(letra);
    let isVogal  = [a|e|i|o|u].test(letra);

    if(isVogal){
        checagem.innerHTML = "é uma vogal!";
    }else if(!isVogal && isLetra){
        checagem.innerHTML = "é uma consoante!";
    }else{
        checagem.innerHTML = "não é consoante ou vogal!";
    }
}