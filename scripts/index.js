const button = document.querySelector('.menuBar--button')
const imagen = button.childNodes[1]
const navBar = document.querySelector('.nav')

const crossIcon = './public/images/cross.png'
const burgerIcon = './public/images/hamburger.png'

const checkAvailability = document.querySelector('.formulario__button')

button.addEventListener('click', () => {
    navBar.classList.toggle('nav--mobile')
    if(navBar.classList.contains('nav--mobile')) {
        imagen.src = crossIcon
        imagen.width = '20'
        imagen.height = '13'
    }
    else imagen.src = burgerIcon
})

checkAvailability.addEventListener('click', () => {
    window.location.href = '../views/rooms.html';
})