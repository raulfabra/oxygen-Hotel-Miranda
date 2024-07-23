const bottonMenú = document.querySelector('.header__menuBar')
const menu = document.querySelector('.nav')

bottonMenú.addEventListener('click', () => {
    console.log(bottonMenú.ATTRIBUTE_NODE)
    menu.classList.toggle('nav--mobile')
})
