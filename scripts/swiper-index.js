// ROOMS SWIPER
const roomSwiper = new Swiper(".rooms__swiper--white", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".rooms__swiper__white__btn--next",
    prevEl: ".rooms__swiper__white__btn--prev",
  },
});

// FACILITIES SWIPER
const mediaQuery = window.matchMedia("(min-width: 1000px)");
const rateSwiper = new Swiper(".facilities__swiper--white", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".facilities__swiper__pagination",
    bulletClass: "facilities__swiper__darkbullet",
    bulletActiveClass: "facilities__swiper__darkbullet--active",
    clickable: true,
  },
});

window.addEventListener("load", (event) => {
  if (event.currentTarget.outerWidth >= 1000) {
    rateSwiper.params.slidesPerView = 3;
    rateSwiper.params.grid.rows = 2;
    rateSwiper.params.grid.fill = "row";
    rateSwiper.update();
  } else return;
});

window.addEventListener("resize", () => {
  if (mediaQuery.matches === true) {
    rateSwiper.params.slidesPerView = 3;
    rateSwiper.params.grid.rows = 2;
    rateSwiper.params.grid.fill = "row";
    rateSwiper.update();
    console.log(rateSwiper);
  } else {
    rateSwiper.params.slidesPerView = 1;
    rateSwiper.params.grid.rows = 1;
    rateSwiper.update();
  }
});

// MENU RESTAURANT HOTEL
const menuSwiper = new Swiper(".menuFoods__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  navigation: {
    nextEl: ".controls__btn--next",
    prevEl: ".controls__btn--prev",
  },
});

// PUBLI
const swiper = new Swiper(".carrusel", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".carrusel__pagination",
    bulletClass: "carrusel__darkbullet",
    bulletActiveClass: "carrusel__darkbullet--active",
    clickable: true,
  },
});
