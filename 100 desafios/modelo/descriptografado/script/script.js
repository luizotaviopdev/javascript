let header = document.querySelector('header')
let arrow = document.getElementsByClassName('material-symbols-outlined')[0]
let title = document.querySelector('h1')
let overlay = document.getElementById('overlay')
let height = header.offsetHeight

let aberto = false

if (!header.style.transform) {
  header.style.transform = `translateY(-${height}px)`
  arrow.textContent = 'arrow_downward'
  arrow.style.transform = 'translateY(0px)'
  title.style.paddingTop = '100px'
  overlay.style.transform = 'translateY(-100vh)'
  aberto = false
}

function ajusterapido() {
  let newHeight = header.offsetHeight

  if (!aberto) { // Fechado
    header.style.transition = '0s'
    header.offsetHeight
    header.style.transform = `translateY(-${newHeight}px)`
    header.offsetHeight
    header.style.transition = '0.6s'
  } else { // Aberto
    arrow.style.transition = '0s'
    arrow.offsetHeight
    arrow.style.transform = `translateY(${newHeight}px)`
    arrow.offsetHeight
    arrow.style.transition = '0.6s'
  }

  height = newHeight
}

const ro = new ResizeObserver(() => {
  ajusterapido()
})
ro.observe(header)

function cabeca() {
  if (aberto) {
    // fechar
    header.style.transform = `translateY(-${height}px)`
    arrow.textContent = 'arrow_downward'
    arrow.style.transform = 'translateY(0px)'
    title.style.paddingTop = '100px'
    overlay.style.transform = 'translateY(-100vh)'
    aberto = false
  } else {
    // abrir
    header.style.transform = 'translateY(0px)'
    arrow.textContent = 'arrow_upward'
    arrow.style.transform = `translateY(${height}px)`
    title.style.paddingTop = '170px'
    overlay.style.transform = 'translateY(0vh)'
    aberto = true
  }
}

function executar() {

}