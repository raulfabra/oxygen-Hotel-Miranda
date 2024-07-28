
const swiper = new Swiper('.rooms__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    pagination:{
      el: '.rooms__swiper__paginationn',
      bulletClass: 'rooms__swiper__bullett',
      bulletActiveClass: 'rooms__swiper__bullett--active',
      clickable: false,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      }
    },

    navigation: {
      prevEl: '.rooms__swiper__controls__prev',
      nextEl: '.rooms__swiper__controls__next',
    }

});