const rateSwiper = new Swiper('.facilities__swiper--dark', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },

  // If we need pagination
  pagination: {
    el: '.facilities__swiper__pagination--marginTop',
    bulletClass: 'facilities__swiper__bullet',
    bulletActiveClass: 'facilities__swiper__bullet--active',
    clickable: true
  },
  
});

const counterSwiper = new Swiper('.carrusel', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },

  // If we need pagination
  pagination: {
    el: '.carrusel__pagination--marginTop',
    bulletClass: 'carrusel__bullet',
    bulletActiveClass: 'carrusel__bullet--active',
    clickable: true
  },
})