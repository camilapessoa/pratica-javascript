// 1) Crie uma função que receba 3 parâmetros: o nome de um livro, a quantidade de páginas e a autoria. Retorne um objeto no formato:

//{titulo: "nome do livro",
//paginas: "número de páginas",
//autoria: "nome da pessoa"}

// Exemplo:
// objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles')
// retorna o objeto:// {
//   titulo: 'Antes do Baile Verde',
//   paginas: 234,
//   autoria: 'Lygia Fagundes Telles'
// }

function criaLivros(livro, paginas, autoria) {
  return {
    livro,
    paginas,
    autoria,
  };
}
console.log(criaLivros("Antes do Baile Verde", 234, "Lygia Fagundes Telles"));

function LivroModel(nome, quantidadePaginas, autor) {
  this.nome = nome;
  this.quantidadePaginas = quantidadePaginas;
  this.autor = autor;
}

const livro = new LivroModel("nome livor", 10, "Estudante dev");
console.log(livro); //show!

const criaLivroAlternativa = (livro, qtdPaginas, autor) => {
  return {
    titulo: livro,
    paginas: qtdPaginas,
    autor: autor,
  };
};
console.log(criaLivroAlternativa("Senhor dos Anéis", 7000, "Tolkien")); //json

// 2) Aproveite a função acima em outra função, que deve retornar a seguinte frase: "O livro XXXX foi escrito por XXX e tem XXX páginas". Você deve utilizar a função que já está pronta, e não reescrever a lógica dela dentro dessa nova função.

function fraseLivro(obj) {
  return `O livro ${obj.livro} foi escrito por ${obj.autoria} e tem ${obj.paginas} páginas.`;
}
console.log(fraseLivro(criaLivros("Senhor dos Anéis", 7000, "Tolkien")));

function flamengo(obj) {
  console.log(
    "O livro " +
      obj.nome +
      " foi escrito por " +
      obj.autor +
      " e tem " +
      obj.paginas +
      " páginas"
  );
}

// 3) Crie uma função que receba um objeto como o abaixo:
// const pessoa = {
//   nome: 'Nazaré',
//   sobrenome: 'Tedesco',
// }
// Dado um objeto que tem uma propriedade 'nome' e uma propriedade 'sobrenome', a função deve retornar um novo objeto com as mesmas propriedades que o objeto recebido e mais uma propriedade, chamada 'nomeCompleto', cujo valor é uma string com o nome e sobrenome separados por um espaço.
//Exemplo de retorno:// {
//   nome: 'Nazaré',
//   sobrenome: 'Tedesco',
//   nomeCompleto: 'Nazaré Tedesco'
// }

//jeito simples

function nomeCompleto(obj) {
  const novoObj = {
    nome: obj.nome,
    sobrenome: obj.sobrenome,
    nomeCompleto: `${obj.nome} ${obj.sobrenome}`,
  };
  return novoObj;
}

const nazare = {
  nome: "Nazare",
  sobrenome: "Tedesco",
};
console.log(nomeCompleto(nazare));

//arrow function spread operator
const pegarNomeCompletoCamisChata = (user) => ({
  ...user,
  nomeCompleto: `${user.nome} ${user.sobrenome}`,
});

function fluminense(obj) {
  const fullName = `${obj.nome} ${obj.sobrenome}`;
  return {
    ...obj,
    nomeCompleto: fullName,
  };
}
// 4) Crie uma função que receba o objeto abaixo e o nome de uma das chaves,
// e retorne a soma de todos os elementos do array que for selecionado através da chave.

const objArrays = {
  array1: [1, 2, 3],
  array2: [5, 6, 7, 8],
  array3: [9, 9, 9],
};

//simplão

// jeito iniciante
function somaCaios(obj, chave) {
  let total = 0;
  const arr = obj[chave];
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(somaCaios(objArrays, "array1"));
console.log(somaCaios(objArrays, "array2"));
console.log(somaCaios(objArrays, "array3"));

// jeito endiabrado, não façam isso - estude object entries
function soma(obj, chave) {
  return Object.entries(obj)
    .map(([key, value]) => {
      if (key == chave) {
        return value.reduce((num, x) => num + x, 0);
      }
    })
    .filter((y) => y);
}

//includes não funciona em objeto
// melhor método
function palmeiras(obj, chave) {
  if (Object.keys(obj).includes(chave)) {
    return obj[chave].reduce(
      (acumulador, valorAtual) => acumulador + valorAtual,
      0
    );
  }
}
