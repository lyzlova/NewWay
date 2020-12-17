import data from "../data.js";
import sliderItemHover from "../Components/sliderItemHover.js";

const createItem = createSliderItem(data);

function createSliderItem(data) {
  return data.map((obj) => createitem(obj, sliderItemHover)).join("");
}

function createitem(obj, sliderItemHover) {
  const li = `
    <li class="swiper-slide slider__item">
        <img class="slider__img" src="${obj.img}" alt="${obj.alt}" height="300" width="330"></img>
      ${sliderItemHover}
    </li>
  `;
  return li;
}

export default createItem;
