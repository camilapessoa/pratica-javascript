const num1 = document.getElementById('num1');

// perfeito 👍
const btn = document.querySelector('#validate');

function validar () {
    // perfeito 👍
    
    if (num1.value > 0){
        console.log('O Número é positivo');

    // ta errado, funciona mas por outros motivos | pq?
    // pq vc quer ver se ele é ABAIXO de 0, e não diferente de 0
    // 
    // ele funciona pq ele sempre vai cair no primeiro if se por ventura o número maior q 0
    // 
    // mas e se for 0?
} else if(num1.value != 0) {
        console.log("O numero e negativo");
    }else {
        console.log("o numero é zero");
    }
}

// Só queria dizer q tu criou mais variáveis do q precisava
// ahh, eu coloquei aqui pq achei q tu ia apagar tudo
// erro meu então :P

//Só não lembro como deixar naquele esquema de ([condicao] ? resultado1 , resultado2)
// nem precisa disso, por enquanto deixa só os ifs padrões ali

// :)  
// Área dos que odeio reduce em JS