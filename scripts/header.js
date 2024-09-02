const button = document.querySelector(".menuBar--button");
const imagen = button.childNodes[1];
const navBar = document.querySelector(".nav");

const crossIcon = "../public/images/cross.png";
const burgerIcon = "../public/images/hamburger.png";

const headerBox = document.querySelector(".header");
const headerMenu = document.querySelector(".header__menuBar");

/* const mediaQuery = window.matchMedia("(min-width: 1000px)"); */

button.addEventListener("click", () => {
  navBar.classList.toggle("nav--mobile");

  if (navBar.classList.contains("nav--mobile")) {
    imagen.src = crossIcon;
    imagen.width = "20";
    imagen.height = "13";
  } else imagen.src = burgerIcon;
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 5) {
    headerBox.classList.add("header__hidden");
  } else headerBox.classList.remove("header__hidden");
});

headerBox.addEventListener("mousemove", function (event) {
  headerBox.classList.remove("header__hidden");
});

window.addEventListener("resize", () => {
  if (mediaQuery.matches === true) {
    navBar.classList.remove("nav--mobile");
    imagen.src = burgerIcon;
  }
});
