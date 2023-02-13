// 1) Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
// Exemplo: recebendo ["banana", "gatinho", "brócolis"] deve imprimir no console:
// índice 0, elemento "banana"
// índice 1, elemento "gatinho"
// índice 2, elemento "brócolis"
//Arrasou!!!!!!
const lista = ["banana", "gatinho", "brócolis"];

function exbirElementos(elementos) {
  if (elementos.length === 0) throw new Error("lista de elementos vazia");

  return elementos.map((elemento, indice) => {
    const mensagem = `indice: ${indice}, elemento: ${elemento}`;
    return mensagem;
  });
}

// console.log(exbirElementos(["uva", "maçã"]));

function getElementIndex(elements) {
  elements.forEach((element, index) => {
    console.log(`índice: ${index}, elemento: ${element}`);
  });
}
getElementIndex(lista);

function forNormal(elements) {
  // 1º parâmetro é um índice => auxiliar;
  // 2º parâmetro é uma validação, valida o primeiro parâmetro com o segundo valor
  // Se a validação do segundo parâmetro for verdadeira, le compila o código de dentro das chaves
  // 3º parâmetro incrementa o valor do 1º parâmetro no final da execução do código de dentro das chaves

  for (let i = 0; i < elements.length; i++) {
    console.log(`índice: ${i}, elemento: ${elements[i]}`);
  }
}
forNormal(lista);

function whileDaquiAPouco(elements) {
  let index = 0;
  while (index < elements.length) {
    console.log(`índice: ${index}, elemento: ${elements[index]}`);
    index++;
  }
}
// whileDaquiAPouco(lista);

// While e Reduce joga fora
