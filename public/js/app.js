const button = document.querySelector(".button");
const popup = document.querySelector(".popup");
const cross = document.querySelector(".cross");
const datePicker = document.querySelector(".datepicker");

button.addEventListener("click", () => {
  popup.classList.remove("no-visible");
});

cross.addEventListener("click", () => {
  popup.classList.add("no-visible");
});

function closePopup(e) {
  const clickedElement = e.target;
  if (!clickedElement.closest(".popup") && !clickedElement.closest(".button")) {
    popup.classList.add("no-visible");
  }
}
document.addEventListener("click", closePopup);

document.addEventListener("DOMContentLoaded", function () {
  flatpickr(datePicker, {
    dateFormat: "d/m/Y",
  });
  datePicker.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
