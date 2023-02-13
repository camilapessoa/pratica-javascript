// 1 - Faça um Programa que peça dois números e imprima o maior deles.

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

const btn = document.getElementById('butao');

btn.addEventListener('click', () => {
    const numero1 = num1.value.replace(',', '.');
    const numero2 = num2.value.replace(',', '.');

    showBiggerValue(numero1, numero2);
})

// Apresenta o maior valor entre os 2 inputs
function showBiggerValue(number1, number2) {
    // Operador ternário
    alert(number1 > number2 ? number1 : number2);
}

//  usem reduce
// buquem conhecimento