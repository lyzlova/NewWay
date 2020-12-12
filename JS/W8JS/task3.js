"use strict";
// // 3. Создать HTML-страницу со светофором и кнопкой, которая переключает
// // светофор на следующий цвет.

const trafficLight = document.createElement("div");
trafficLight.className = "traffic-light";

const trafficLightColors = document.createElement("div");
trafficLightColors.className = "traffic-light__colors";
const trafficLightRed = document.createElement("div");
trafficLightRed.className = "color color--red";
const trafficLightYellow = document.createElement("div");
trafficLightYellow.className = "color color--yellow";
const trafficLightGreen = document.createElement("div");
trafficLightGreen.className = "color color--green";

const trafficLightSwitch = document.createElement("button");
trafficLightSwitch.className = "button traffic-light--button";
trafficLightSwitch.textContent = "Next light";

trafficLightColors.append(
  trafficLightRed,
  trafficLightYellow,
  trafficLightGreen
);

trafficLight.append(trafficLightColors, trafficLightSwitch);
root.append(trafficLight);

trafficLight.addEventListener("click", handleSwitchLight);

let count = 0;

function handleSwitchLight(e) {
  const colorsList = document.querySelectorAll(".color");
  const arrLight = [...colorsList];
  const validValue = e.target.nodeName === "BUTTON";

  if (validValue) {
    arrLight.forEach(item => {
      item.classList.remove("active");
    });

    arrLight[count].classList.add("active");
    count += 1;

    if (count > 2) {
      count = 0;
    }
  }
}
