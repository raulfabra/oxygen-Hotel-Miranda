const swiper = new Swiper('.imageSwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay:{
    delay: 3500,
    disableOnInteraction: false,
  },

  pagination: {
      el: '.imageSwiper__pagination',
      bulletClass: 'imageSwiper__bullet',
      bulletActiveClass: 'imageSwiper__bullet--active',
      clickable: true,
    },
})

const roomSwiper = new Swiper('.rooms__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.rooms__swiper__btn--next',
      prevEl: '.rooms__swiper__btn--prev',
    }
})

const rateSwiper = new Swiper('.facilities__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: "1",
  spaceBetween: 30,
  autoplay:{
    delay: 3500,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.facilities__swiper__pagination',
    bulletClass: 'facilities__swiper__bullet',
    bulletActiveClass: 'facilities__swiper__bullet--active',
    clickable: true
  },
  
})

const menuSwiper = new Swiper('.menuFoods__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.controls__btn--next',
    prevEl: '.controls__btn--prev',
  }
})