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

document.querySelectorAll('#largura, #altura').forEach(elements => {
    elements.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            executar()
        }
    })
})

function executar() {
        let largura = Number(document.getElementById('largura').value)
        let altura = Number(document.getElementById('altura').value)
        const saida = document.getElementById('saida')
        if (!largura || largura <= 0) {
            window.alert('Digite uma largura válida maior do que 0')
        } else if (!altura || altura <= 0) {
            window.alert('Digite uma altura válida maior do que 0')
        } else {
            saida.innerHTML = `A área da parede é de ${(largura * altura).toFixed(2)}m <br>
        Você vai precisar de ${((largura * altura) / 2).toFixed(2)}l de tinta`
        }
    }