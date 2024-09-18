const checkAvailability = document.querySelector(".form__button");
const mediaQuery = window.matchMedia("(min-width: 1000px)");
const divSwiperFacilities = document.querySelector(".facilities__swiper");

window.addEventListener("resize", () => {
  console.log(mediaQuery.matches);
  if (mediaQuery.matches === true) {
    divSwiperFacilities.classList.replace("facilities__swiper", "facilities__swiper--laptop");
    divSwiperFacilities.classList.add("mySwiperFacilities");
  }
});

checkAvailability.addEventListener("click", () => {
  window.location.href = "../views/rooms.html";
});
