function cabeca() {
    header = document.querySelector('header')
    seta = document.getElementsByClassName('material-symbols-outlined')[0]
    title = document.querySelector('h1')
    overlay = document.getElementById('overlay')
    if (header.style.transform == 'translateY(0px)') {
        header.style.transform = 'translateY(-127px)'
        seta.textContent = 'arrow_downward'
        seta.style.transform = 'translateY(0px)'
        title.style.paddingTop = '100px'
        overlay.style.transform = 'translateY(-100vh)'
    } else {
        header.style.transform = 'translateY(0px)'
        seta.textContent = 'arrow_upward'
        seta.style.transform = 'translateY(127px)'
        title.style.paddingTop = '170px'
        overlay.style.transform = 'translateY(0vw)'
    }
}