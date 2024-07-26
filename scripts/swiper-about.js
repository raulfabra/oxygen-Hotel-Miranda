const rateSwiper = new Swiper('.facilities__swiper--dark', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.facilities__swiper__pagination',
    bulletClass: 'facilities__swiper__bullet',
    bulletActiveClass: 'facilities__swiper__bullet--active',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.facilities__swiper__btn--next',
    prevEl: '.facilities__swiper__btn--prev',
  },
  
});

const counterSwiper = new Swiper('.counter__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.counter__swiper__pagination',
    bulletClass: 'counter__swiper__bullet',
    bulletActiveClass: 'counter__swiper__bullet--active',
    clickable: true
  },
/* 
  // Navigation arrows
  navigation: {
    nextEl: '.facilities__swiper__btn--next',
    prevEl: '.facilities__swiper__btn--prev',
  }, */
})









/* const rateSwiper = new Swiper('.facilities__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,

  pagination: {
      el: '.facilities__pagination',
      bulletClass: 'facilities__darkbullet',
      bulletActiveClass: 'facilities__bullet--active',
      clickable: true,
    },
});


const imagesSwiper = new Swiper('.about__images__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,

  pagination: {
      el: '.about__images__pagination',
      bulletClass: 'about__images__bullet',
      bulletActiveClass: 'about__images__bullet--active',
      clickable: true,
    },
}); */