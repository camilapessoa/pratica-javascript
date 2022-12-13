const days = {
    1: 'Domingo',
    2: 'Segunda-feira',
    3: 'Terça-feira',
    4: 'Quarta-feira',
    5: 'Quinta-feira',
    6: 'Sexta-feira',
    7: 'Sabado',
}

dia.addEventListener('keyup', (e) => {
    // e => evento disparado pelo dom
    // target => tag html que disparou o evento
    // value => é a propriedade do html

    // exemplo: <input type="number" name="numero" value="1">
    // e.target.value == 1
    const day = days[e.target.value];//pega o evento inteiro, target -> elemento atrelado ao evento
    if (!day) return alert('OW BURRÃO, tem nada com isso n');
    alert('o dia é: ' + day);
})

// (Não) usem reduce!