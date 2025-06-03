let __qz7 = document.querySelector('header');
let __xv3 = document.getElementsByClassName('material-symbols-outlined')[0];
let __kp9 = document.querySelector('h1');
let __rm4 = document.getElementById('overlay');
let __bq6 = __qz7.offsetHeight;

let __wz1 = false;

if (!__qz7.style.transform) {
  __qz7.style.transform = `translateY(-${__bq6}px)`;
  __xv3.textContent = 'arrow_downward';
  __xv3.style.transform = 'translateY(0px)';
  __kp9.style.paddingTop = '100px';
  __rm4.style.transform = 'translateY(-100vh)';
  __wz1 = false;
}

function __ajusteRapido() {
  let __nv8 = __qz7.offsetHeight;

  if (!__wz1) { // Fechado
    __qz7.style.transition = '0s';
    __qz7.offsetHeight;
    __qz7.style.transform = `translateY(-${__nv8}px)`;
    __qz7.offsetHeight;
    __qz7.style.transition = '0.6s';
  } else { // Aberto
    __xv3.style.transition = '0s';
    __xv3.offsetHeight;
    __xv3.style.transform = `translateY(${__nv8}px)`;
    __xv3.offsetHeight;
    __xv3.style.transition = '0.6s';
  }

  __bq6 = __nv8;
}

const __ro = new ResizeObserver(() => {
  __ajusteRapido();
});
__ro.observe(__qz7);

function cabeca() {
  if (__wz1) {
    // fechar
    __qz7.style.transform = `translateY(-${__bq6}px)`;
    __xv3.textContent = 'arrow_downward';
    __xv3.style.transform = 'translateY(0px)';
    __kp9.style.paddingTop = '100px';
    __rm4.style.transform = 'translateY(-100vh)';
    __wz1 = false;
  } else {
    // abrir
    __qz7.style.transform = 'translateY(0px)';
    __xv3.textContent = 'arrow_upward';
    __xv3.style.transform = `translateY(${__bq6}px)`;
    __kp9.style.paddingTop = '170px';
    __rm4.style.transform = 'translateY(0vh)';
    __wz1 = true;
  }
}

document.querySelectorAll('#fim, #inicio, #passo').forEach(elemento => {
  elemento.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
      executar();
    }
  })
})

function executar() {
  let inicio = document.getElementById('inicio').value
  let fim = document.getElementById('fim').value
  let passo = document.getElementById('passo').value
  const saida = document.getElementById('saida')

  saida.innerText = ''

  if (inicio === '' || fim === '' || passo === '') {
    window.alert('Por favor, preencha todos os campos corretamente')
    return;
  }

  inicio = Number(inicio)
  fim = Number(fim)
  passo = Number(passo)

  if (passo <= 0) {
    window.alert('O valor de "Passo" não pode ser menor ou igual a 0, corrigimos automaticamente para 1')
    passo = 1
    document.getElementById('passo').value = '1'
  }

  if (fim <= 0) {
    window.alert('O valor de "Fim" não pode ser menor ou igual a 0.')
    return;
  }

  if (fim < inicio) {
    window.alert('Conta impossivel')
    return;
  }


  for (inicio; inicio <= fim; inicio += passo) {
    saida.innerHTML += `${inicio} &#128073`
  }
  saida.innerHTML += `&#x1F3F4`
}