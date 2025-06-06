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

document.getElementById('num').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    adicionar()
  }
})

let valores = []
const saida = document.getElementById('saida')


function adicionar() {
  let num = Number(document.getElementById('num').value)
  const seletor = document.getElementById('seletor')
  if (num < 1 || num > 100) {
    window.alert('Por favor, digite um número válido entre 1 e 100')
  } else if (valores.includes(num)) {
    window.alert(`O número ${num} já foi selecionado, por favor, selecione outro.`)
    return;
  } else {
    saida.innerHTML = ''
    valores.push(num)
    let option = document.createElement('option')
    option.text = `Valor ${valores[valores.length - 1]} Adicionado.`
    seletor.appendChild(option)
  }
}

function executar() {
  if (valores.length === 0) {
    window.alert('Nenhum valor foi registrado.')
  } else {
    let maiorvalor = 0
    let menorvalor = 101
    let somando = 0

    for (let num of valores) {
      somando += num
      if (num > maiorvalor) maiorvalor = num
      if (num < menorvalor) menorvalor = num
    }

    let media = Number((somando / valores.length).toFixed(2))

    saida.innerHTML = `
      Ao todo, temos ${valores.length} números cadastrados. <br>
      O maior valor informado foi ${maiorvalor}. <br>
      O menor valor informado foi ${menorvalor}. <br>
      Somando todos os valores, temos ${somando}. <br>
      A média dos valores digitados é ${media}.
    `
  }
}