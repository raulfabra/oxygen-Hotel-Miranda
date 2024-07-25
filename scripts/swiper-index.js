
const swiper = new Swiper('.rooms__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.rooms__swiper__btn--next',
      prevEl: '.rooms__swiper__btn--prev',
    }
});

const rateSwiper = new Swiper('.facilities__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'facilities__bullet',
    bulletActiveClass: 'facilities__bullet--active',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.facilities__swiper__btn--next',
    prevEl: '.facilities__swiper__btn--prev',
  },
  
});

/* const menuSwiper = new Swiper('.index__menu__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,

  navigation: {
      nextEl: '.index__menu__right',
      prevEl: '.index__menu__left'
  },
});

const imagesSwiper = new Swiper('.index__images__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  initialSlide: 1,
  spaceBetween: 10,

  pagination: {
      el: '.index__images__pagination',
      bulletClass: 'index__images__bullet',
      bulletActiveClass: 'index__images__bullet--active',
      clickable: true,
    },
}); */