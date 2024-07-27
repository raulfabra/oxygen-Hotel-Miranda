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
    el: '.facilities__swiper__pagination--dark',
    bulletClass: 'facilities__swiper__bullet',
    bulletActiveClass: 'facilities__swiper__bullet--active',
    clickable: true
  },
  
});

const counterSwiper = new Swiper('.counter__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },

  // If we need pagination
  pagination: {
    el: '.counter__swiper__pagination',
    bulletClass: 'counter__swiper__bullet',
    bulletActiveClass: 'counter__swiper__bullet--active',
    clickable: true
  },
})