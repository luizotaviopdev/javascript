function cabeca() {
    let xjKz = document.querySelector('header');
    let qLt9 = document.getElementsByClassName('material-symbols-outlined')[0];
    let zVf3 = document.querySelector('h1');
    let rMn2 = document.getElementById('overlay');
    let oXp7 = xjKz.offsetHeight;

    if (xjKz.style.transform === 'translateY(0px)') {
        xjKz.style.transform = `translateY(-${oXp7}px)`;
        qLt9.textContent = 'arrow_downward';
        qLt9.style.transform = 'translateY(0px)';
        zVf3.style.paddingTop = '100px';
        rMn2.style.transform = 'translateY(-100vh)';
    } else {
        xjKz.style.transform = 'translateY(0px)';
        qLt9.textContent = 'arrow_upward';
        qLt9.style.transform = `translateY(${oXp7}px)`;
        zVf3.style.paddingTop = '170px';
        rMn2.style.transform = 'translateY(0vh)';
    }
}

document.querySelectorAll('#nome, #sal').forEach(el => {
    el.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            event.preventDefault()
            executar()
        }
    })
})


function executar() {
    nome = document.getElementById('nome').value
    sal = Number(document.getElementById('sal').value)
    saida = document.getElementById('saida')
    if (nome == "") {
        window.alert('Nenhum nome foi registrado')
    } else if (sal == "") {
        window.alert('Nenhum salário foi registrado')
    } else {
        saida.innerHTML = `O funcionário ${nome} tem um salário de R$${sal.toFixed(2).replace('.', ',')} em Junho.`
    }
}