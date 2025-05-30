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
        rMn2.style.transform = 'translateY(0vw)';
    }
}

document.getElementById('real').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        executar();
    }
});

function executar() {
    real = document.getElementById('real').value
    saida = document.getElementById('saida')
    if (real == 0) {
        window.alert('Insira um número válido maior que zero.')
    } else {
        saida.innerHTML = `Você pode comprar US$${(real*3.45).toFixed(2)}`
    }
}