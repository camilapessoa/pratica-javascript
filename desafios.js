// 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar
// valores iguais a 0 (zero). Adicione esta lógica nas funções.

//3) crie uma função que chame internamente qualquer uma das funções acima e imprima o resultado no formato de String. Exemplo: "O resultado da operação é X" (sendo X o valor do resultado).

function soma(num, num2) {
  return num + num2;
}

function subt(num, num2) {
  return num - num2;
}

function mult(num, num2) {
  if (num !== 0 || num2 !== 0) {
    return num * num2;
  }
  return "Os números não podem ser iguais a zero";
}

function divisao(num, num2) {
  if (num !== 0 || num2 !== 0) {
    return num / num2;
  }
  return "Os números não podem ser iguais a zero";
}

// function verificarOperacao(a, b, Opera) {
//     switch (opera){

//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;

// }
//}

function operacao(a, b, operador) {
  switch (operador) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Operação inválida"; //Ótima colocação do default para a inserção de dígito inválido.
  }
}

console.log("Console log das operações", operacao(2, 2, "´"));

//O codigo gera dois N aleatorios inteiros entre os limite depois adiciona o o valor minimo
//Math.floor arredonda os numeros
//math.random procurar numeros entre a direferença dos limite
//Depois soma o limiteInf para que o valor fique entre os limitesSup e Inf
function randomN(limiteInf, limiteSup) {
  const numero1 =
      Math.floor(Math.random() * (limiteSup - limiteInf + 1)) + limiteInf,
    numero2 =
      Math.floor(Math.random() * (limiteSup - limiteInf + 1)) + limiteInf;
  return [numero1, numero2];
}

// NÃO USEM REDUCE

// quando a gente valida somente a variável, é conferido se o valor é diferente de null, undefined ou 0
// porque 0 é falso
// então se tiver algum valor acima de 0 em ambas as variáveis, ele executa o código
function mult2(num, num2) {
  if (num && num2) return num * num2;
  return "Os números não podem ser iguais a zero";
}

function divisao2(num, num2) {
  if (num && num2) return num / num2;
  return "Os números não podem ser iguais a zero";
}

function multipicacao(num1, num2) {
  const temNumeroIgualAZero = [num1, num2].includes(0);
  if (temNumeroIgualAZero)
    throw new Error("Não é possível multiplicar por zero");

  return num1 * num2;
}

function validacao(num1, num2, mult) {
  const result = mult ? mult2(num1, num2) : divisao2(num1, num2);
  return typeof result == "number"
    ? `O resultado da operação é ${result}`
    : result;
}

console.log("do Airam");

console.log(validacao(1, 0, true));
console.log(validacao(1, 4, true));
console.log(validacao(1, 0));
console.log(validacao(10, 2));
