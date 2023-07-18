"use strict";

const modal = document.querySelector(".modal");
const overLay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = () => {
  modal.classList.remove("hidden");
  overLay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overLay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overLay.addEventListener("click", closeModal);

// EscKeyprees event ; document.addEventListener adds the event to all the webpage.

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
