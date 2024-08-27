const bookings = document.querySelectorAll(".card__button"); //Boton Book Now
const nameRooms = document.querySelectorAll(".card__title"); //Nombre de la habitación
const roomsImage = document.querySelectorAll(".card__picture"); //Foto de la habitación

bookings.forEach((booking) => {
  booking.addEventListener("click", () => {
    window.location.href = "../views/roomDetails.html";
  });
});
nameRooms.forEach((title) => {
  title.addEventListener("click", () => {
    window.location.href = "../views/roomDetails.html";
  });
});
roomsImage.forEach((picture) => {
  picture.addEventListener("click", () => {
    window.location.href = "../views/roomDetails.html";
  });
});
