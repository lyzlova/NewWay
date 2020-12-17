"use strict";

import title from "./Components/title.js";
import item from "./Components/item.js";

const root = document.getElementById("root");

const container = createWork(title, item);

function createWork(title, item) {
  const div = `
  <div class="work container">
  ${title}
  <div class="swiper-container slider">
  <ul class="swiper-wrapper slider__list">
    ${item}
  </ul>
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
   <div class="swiper-pagination"></div>
  </div>
  </div>
  `;
  return div;
}

root.insertAdjacentHTML("afterbegin", container);

const mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    renderBullet: function (className) {
      return '<span class="swiper-bullet ' + className + '"> </span>';
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
})