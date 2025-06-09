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

function executar(){
    let nome = document.getElementById('nome').value
    let sal = Number(document.getElementById('sal').value)
    const saida = document.getElementById('saida')

    if (nome === '' || sal == '' || sal === 0) {
      window.alert('Por favor, preencha os campos corretamente.')
    } else {
      let reajuste = 0.18 * sal
      saida.innerHTML = `O salário atual era ${sal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}. <br>
      Com um aumento de 18%, o salário vai aumentar ${reajuste.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no próximo mês. <br>
      E a partir dai, ${nome} vai passar a ganhar ${(sal + reajuste).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`
    }

}