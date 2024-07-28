
const swiper = new Swiper('.popularRooms__swiper--white', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    pagination:{
      el: '.popularRooms__swiper__pagination',
      bulletClass: 'popularRooms__swiper__darkbullet',
      bulletActiveClass: 'popularRooms__swiper__bullet--active',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.popularRooms__swiper__white__btn--next',
      prevEl: '.popularRooms__swiper__white__btn--prev',
    }
});