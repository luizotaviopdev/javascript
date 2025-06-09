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

const formatBRL = v => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function executar() {
  let precoant = Number(document.getElementById('precoant').value)
  let precodep = Number(document.getElementById('precodep').value)
  const saida = document.getElementById('saida')

  if (precoant <= 0 || precodep <= 0) {
    window.alert('Por favor, preencha os campos com números válidos maiores do que 0')
    return;
  }

  if (precoant < precodep) {
    saida.innerHTML = `<p style="color:black;font-size:23px;"><strong>Analisando os valores informados</strong></p>`
    saida.innerHTML += `<p>O produto custava ${formatBRL(precoant)} e agora custa ${formatBRL(precodep)}. <br>
  Hoje o produto está mais caro. <br>
    O preço subiu ${formatBRL(precodep - precoant)} em relação ao preço anterior. <br>
    Uma variação de ${(((precodep - precoant) / precoant) * 100).toFixed(1).replace('.',',')}% para cima.</p>`
  } else {
    saida.innerHTML = `<p style="color:black;font-size:23px;"><strong>Analisando os valores informados</strong></p>`
    saida.innerHTML += `<p>O produto custava ${formatBRL(precoant)} e agora custa ${formatBRL(precodep)}. <br>
  Hoje o produto está mais barato. <br>
    O preço caiu ${formatBRL(precoant - precodep)} em relação ao preço anterior. <br>
    Uma variação de ${(((precoant - precodep) / precodep) * 100).toFixed(1).replace('.',',')}% para baixo.</p>`
  }





}