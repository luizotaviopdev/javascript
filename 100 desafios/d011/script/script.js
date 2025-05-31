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

document.querySelectorAll('#a, #b, #c').forEach(elements => (
    elements.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            executar()
        }
    })
))

function executar() {
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value
    let c = document.getElementById('c').value

    const saida = document.getElementById('saida')


    if ( a === '' || b === '' || c === '') {
        window.alert('Por favor, preencha todos os campos')
        return
    } else if (a == 0) {

        window.alert('O valor de A não pode ser 0 em uma equação de segundo grau. Corrigimos automaticamente para A = 1.');
        a = 1;
        document.getElementById('a').value = 1;
    }

    a = Number(a)
    b = Number(b)
    c = Number(c)

    let delta = parseFloat((b ** 2 - 4 * a * c).toFixed(4))
    saida.innerHTML = `O valor de delta é de ${delta}`
}