const num1 = document.getElementById('num1');

// perfeito 👍
const btn = document.querySelector('#validate');

function validar () {
    // perfeito 👍
    if (num1.value > 0){
        console.log('O Número é positivo');
    } else if(num1.value < 0) {
        console.log("O número e negativo");
    } else {
        console.log("O número é zero");
    }
}

// :)  
// Área dos que odeio reduce em JS