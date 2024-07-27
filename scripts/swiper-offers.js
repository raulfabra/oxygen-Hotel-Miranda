
const swiper = new Swiper('.popularRooms__swiper--white', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.popularRooms__swiper--white__btn--next',
      prevEl: '.popularRooms__swiper--white__btn--prev',
    }
});