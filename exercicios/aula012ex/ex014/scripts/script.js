function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12) {
    //DIA
    img.src = 'imagens/morning.png'
    document.body.style.background = '#C28341'

} else if (hora >= 12 && hora <= 18) {
    //TARDE
    img.src = 'imagens/evening.png'
    document.body.style.background = '#4E3C64'
} else {
    //NOITE
    img.src = 'imagens/night.png'
    document.body.style.background = '#0D0401'
}

}