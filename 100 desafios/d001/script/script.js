function cabeca() {
    xjKz = document.querySelector('header');
    qLt9 = document.getElementsByClassName('material-symbols-outlined')[0];
    zVf3 = document.querySelector('h1');
    rMn2 = document.getElementById('overlay');
    oXp7 = xjKz.offsetHeight;

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

function executar(){
    var saida = document.getElementById('saida')
    saida.innerHTML = ('Hello, World')
}