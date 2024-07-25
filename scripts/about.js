const button = document.querySelector('.menuBar--button')
const imagen = button.childNodes[1]
const navBar = document.querySelector('.nav')

const crossIcon = '../public/images/cross.png'
const burgerIcon = '../public/images/hamburger.png'

const video = document.getElementById('video')

button.addEventListener('click', () => {
    navBar.classList.toggle('nav--mobile')
    if(navBar.classList.contains('nav--mobile')) {
        imagen.src = crossIcon
        imagen.width = '20'
        imagen.height = '13'
    }
    else imagen.src = burgerIcon
})

video.addEventListener('loadedmetadata', () => {
    video.currentTime = 22
})

video.addEventListener('timeupdate', () => {
    if (video.currentTime >= 75) video.pause()
})