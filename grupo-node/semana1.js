// 1) crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão), cada uma delas recebendo 2 números como parâmetros e retornando o resultado

function soma(num1, num2) {
  return num1 + num2;
}

function subtração(num1, num2) {
  return num1 - num2;
}

function mult(num1, num2) {
  return num1 * num2;
}

function divisão(num1, num2) {
  return num1 / num2;
}
// 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero). Adicione esta lógica nas funções.

//mult(num1);

// 3) crie uma função que chame internamente qualquer uma das funções acima e imprima o resultado no formato de String. Exemplo: "O resultado da operação é X" (sendo X o valor do resultado).

// 4) utilizando as funções de soma e multiplicação já feitas nos exercícios anteriores, crie uma nova função que chame essas funções e resolva a conta 36325 * (9824 + 777).

// 5) crie uma função que receba dois números e gere outros dois números aleatórios com valores entre eles. Exemplo: uma função que receba (1, 100) deve gerar dois números aleatórios entre 1 e 100 (por exemplo, 54 e 12). Em seguida, some estes números e devolva uma string com o resultado no formato: "a soma de [número aleatório] e [número aleatório] é XXX". Você vai ter que pesquisar o método do JS para gerar números aleatórios, `Math.random()` e como utilizá-lo.

// 6) Crie uma função com as seguintes características:
//    1. A função deve receber 3 números
//    2. Se qualquer um dos três números não forem informados, a função deve retornar a string: "Preencha todos os valores corretamente!"
//    3. O retorno da função deve ser a multiplicação dos 3 números, somando `2` ao resultado da multiplicação. DICA: pesquise o que aparece no console.log caso uma função precise de um parâmetro, mas não receba nenhum.

function multTresNumeros(num1, num2, num3) {
  if (num1 === undefined || num2 === undefined || num3 === undefined) {
    return `Preencha todos os valores corretamente!`;
  }
  return num1 * num2 * num3 + 2;
}

console.log(multTresNumeros(10, "x", 10));

function dobroSoma(x, y, z) {
  console.log(
    isNaN(x + y + z) ? "Insira três números válidos" : (x + y + x) * 2
  );
}

dobroSoma(2, 3);
dobroSoma(2, 3, 6);
// 7) Crie uma função com as seguintes características:
//    1. A função deve receber 3 parâmetros.
//    2. Se somente um parâmetro for passado, retorne o valor do parâmetro.
//    3. Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
//    4. Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
//    5. Se nenhum parâmetro for passado, retorne "não recebeu parâmetro"

function existParams(x, y, z) {
  if (x !== undefined && y === undefined && z === undefined) {
    return console.log(`Retornando o valor de X: ${x}`);
  } else if (x !== undefined && y !== undefined && z === undefined) {
    return console.log(`Retornando a soma de X e Y: ${x + y}`);
  } else if (x !== undefined && y !== undefined && z !== undefined) {
    return console.log(
      `Retornando a soma de X e Y dividido por Z: ${(x * y) / z}`
    );
  } else {
    return console.log("Nenhum parâmetro foi passado!");
  }
}

console.log(existParams(10, 20, 30));

const test = (...parameters) => {
  if (test.length > 3) {
    return console.log("os parâmetros não pode passar de 3");
  }
};

const operacaoComParametros = (num1, num2, num3) => {
  let parametros = [num1, num2, num3];
  let validos = parametros.filter((num) => !isNaN(num));
  let resultado;
  switch (validos.length) {
    case 0:
      resultado = "Não recebeu parâmetro";
      break;
    case 1:
      resultado = validos[0];
      break;
    case 2:
      resultado = validos[0] + validos[1];
      break;
    case 3:
      resultado = (validos[0] + validos[1]) / validos[3];
      break;
  }
  console.log(resultado);
};

// 8) crie uma função que receba uma string como parâmetro, e retorne essa mesma string invertida. Por exemplo, recebendo "alura", vai retornar "arula". Para isso, você vai ter que pesquisar como usar JavaScript para inverter uma string.
function inverter(palavra) {
  return palavra.split("").reverse().join("");
}
console.log(inverter("alura"));
// 9) Agora que você já sabe reverter strings, crie uma função que receba uma string, verifique se é um palíndromo e retorne true ou false. Exemplo de palíndromo: "arara".

// 10) crie uma função que receba duas strings como parâmetros e retorne a string com a maior quantidade de caracteres. Por exemplo, se passarmos como parâmetro "banana" e "chocolate" a função deve retornar "chocolate"
