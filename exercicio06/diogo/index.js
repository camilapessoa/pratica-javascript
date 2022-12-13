const diasSemana = dia => {
    const dias = ['Domingo', 'Segunda', 'Treça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

    const temDia = dias.includes(dia)

    if(temDia){
        return dias[dia]
    }else{
        return 'Não tem'
    }
}