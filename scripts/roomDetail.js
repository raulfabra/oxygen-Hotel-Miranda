const button = document.querySelector('.menuBar--button')
const imagen = button.childNodes[1]
const navBar = document.querySelector('.nav')

const crossIcon = '../public/images/cross.png'
const burgerIcon = '../public/images/hamburger.png'

const checkAvailability = document.getElementById('checkAvailabilityButton')
const reservationForm = document.getElementById('reservationFormTitle')
const bookingForm = document.querySelector('.booking')

const confirmBook = document.getElementById('confirmBook')

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
    reservationForm.classList.toggle('card__form__title--hidden')
    bookingForm.classList.toggle('booking--hidden')
})

confirmBook.addEventListener('click', () => {
    alert('¡Thank you for your request!')
})