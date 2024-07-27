
const swiper = new Swiper('.info__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.rooms__swiper__btn--next',
      prevEl: '.rooms__swiper__btn--prev',
    }
});