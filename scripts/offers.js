const button = document.querySelector('.menuBar--button')
const imagen = button.childNodes[1]
const navBar = document.querySelector('.nav')

const crossIcon = '../public/images/cross.png'
const burgerIcon = '../public/images/hamburger.png'

const bookings = document.querySelectorAll('.card__button') //Boton Book Now
const nameRooms = document.querySelectorAll('.card__title') //Nombre de la habitación
const roomsImage = document.querySelectorAll('.card__picture') //Foto de la habitación

button.addEventListener('click', () => {
    navBar.classList.toggle('nav--mobile')
    if(navBar.classList.contains('nav--mobile')) {
        imagen.src = crossIcon
        imagen.width = '20'
        imagen.height = '13'
    }
    else imagen.src = burgerIcon
})

bookings.forEach((booking) => {
    booking.addEventListener('click', () => {
        window.location.href = '../views/roomDetails.html'
    })
})
nameRooms.forEach((title) => {
    title.addEventListener('click', () => {
        window.location.href = '../views/roomDetails.html'
    })
})
roomsImage.forEach((picture) => {
    picture.addEventListener('click', () => {
        window.location.href = '../views/roomDetails.html'
    })
})