function Click() {
    nome = document.getElementById('nome').value
    saida = document.getElementById('saida')
    if (nome == '') {
        window.alert('Nenhum nome registrado')
    } else {
    saida.innerHTML = `Olá <strong>${nome}</strong>, é um prazer te conhecer!`}
    }