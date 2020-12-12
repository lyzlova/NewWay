"use strict";

// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном.
// На модальном окне должен быть текст и кнопка "Закрыть". Изначально
// модальное окно не отображается. При клике на кнопку "Открыть" появляется
// модальное окно, на кнопку "Закрыть" – исчезает.
const root = document.getElementById("root");

const modalBtnOpen = document.createElement("button");
modalBtnOpen.className = "button button--open";
modalBtnOpen.textContent = "Open";
modalBtnOpen.dataset.action = "open-modal";

const modalBackdrop = document.createElement("div");
modalBackdrop.className = "backdrop";

const modal = document.createElement("div");
modal.className = "modal";

const modalTitle = document.createElement("h2");
modalTitle.className = "modal__title";
modalTitle.textContent = "Title";

const modalText = document.createElement("p");
modalText.className = "modal__text";
modalText.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nulla exercitationem ratione minima facilis asperiores, perspiciatis ipsa culpa perferendis necessitatibus saepe, a quo numquam provident quis alias eius blanditiis labore quisquam expedita magni rerum accusamus! Temporibus tenetur molestias magni quidem inventore ab alias possimus. Earum neque magnam perferendis natus praesentium cumque, deleniti consequatur explicabo illum modi animi, quisquam doloremque, sit ipsa dolores eaque possimus error ut quam obcaecati corrupti harum quos laboriosam. Sit quam consequatur fugit. Nam laudantium rem cupiditate saepe optio assumenda hic, earum fuga totam neque perferendis quis aliquam, dolorem quibusdam vero qui incidunt aut natus dignissimos ratione.";

const modalBtnClose = document.createElement("button");
modalBtnClose.className = "button button--close";
modalBtnClose.textContent = "Close";
modalBtnOpen.dataset.action = "close-modal";

modal.append(modalTitle, modalText, modalBtnClose);
modalBackdrop.append(modal);
root.append(modalBtnOpen, modalBackdrop);

const openModalBtn = document.querySelector(".button--open");
const closeModalBtn = document.querySelector(".button--close");
const backdrop = document.querySelector(".backdrop");

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

function openModal() {
  document.body.classList.add("show-modal");
}

function closeModal() {
  document.body.classList.remove("show-modal");
}

