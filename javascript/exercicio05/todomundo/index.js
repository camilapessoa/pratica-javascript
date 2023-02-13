const verifica = () => {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const media = (nota1 + nota2) / 2;
    console.log(nota1)
    console.log(media)
    if (media >= 7 || media<10) {
        alert(`Sua média foi <strong>${media}</strong>, parabêns você foi aprovado`)
        const resultado = docuumento.getElementById('resultado');
        resultado.innerHTML=media;
      console.log(media)
    } else if (media < 7){
        alert(`Sua média foi ${media} infelizmente você não atingiu a nota minima.`);
    }else if(media==10){
        alert(`Parabéns sua média foi ${media} e foi aprovado com distinção`);
    }
}

//https://vscode.dev/

// segue lá seus lindos https://www.linkedin.com/in/thiago-menezes-da-silva-2027aa248/