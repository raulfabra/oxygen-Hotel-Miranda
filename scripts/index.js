const bottonMenú = document.querySelector('.menu-bar')
const menu = document.querySelector('.nav')

bottonMenú.addEventListener('click', () => {
    menu.classList.toggle('nav--mobile')
})
