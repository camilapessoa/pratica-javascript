function checaMaior() {
    checagem.innerHTML = Math.max(+numero1.value, +numero2.value, +numero3.value);
}

// JS busca variáveis não declaradas no arquivo, no DOM, caso ache, ele atribui para a mesma
// Exemplo: "checagem" não foi declarada como variável, então o JS busca uma tag com esse ID
// existem palavras reservadas (globais) no JS, como "document", por isso deve se tomar cuidado com o uso dessa técnica
