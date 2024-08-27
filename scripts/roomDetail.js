const checkAvailability = document.getElementById("checkAvailabilityButton");
const reservationForm = document.getElementById("reservationFormTitle");
const bookingForm = document.querySelector(".booking");

const confirmBook = document.getElementById("confirmBook");

checkAvailability.addEventListener("click", () => {
  reservationForm.classList.toggle("card__form__title--hidden");
  bookingForm.classList.toggle("booking--hidden");
});

confirmBook.addEventListener("click", () => {
  alert("¡Thank you for your request!");
});
