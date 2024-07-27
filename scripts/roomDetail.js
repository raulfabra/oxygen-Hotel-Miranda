const button = document.querySelector('.menuBar--button')
const imagen = button.childNodes[1]
const navBar = document.querySelector('.nav')

const crossIcon = '../public/images/cross.png'
const burgerIcon = '../public/images/hamburger.png'

button.addEventListener('click', () => {
    navBar.classList.toggle('nav--mobile')
    if(navBar.classList.contains('nav--mobile')) {
        imagen.src = crossIcon
        imagen.width = '20'
        imagen.height = '13'
    }
    else imagen.src = burgerIcon
})