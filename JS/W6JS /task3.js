"use strict";
const root = document.getElementById("root");

// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание,
//   подчеркивание и т. д.). Каждый элемент массива – это объект,
//   состоящий из двух свойств: название стиля и значение стиля.

//   Написать функцию, которая принимает массив стилей и текст,
//   и выводит этот текст с помощью document.write() в тегах <p></p>,
//   добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
const listStyle = [
    { "margin-bottom": "30px" },
    { "font-size": "20px" },
    { color: "red" },
    { "font-weight": 400 },
    { "line-height": 1.623 },
    { "text-align": "center" },
  ];
  
  const textButton = "Click me!";
  
  const card = document.createElement("div");
  const cardTitle = document.createElement("h2");
  cardTitle.style.textAlign = "center";
  cardTitle.innerText = "Card";
  card.append(cardTitle);
  root.append(card);
  
  const createButton = (styles, text) => {
    let stylesText = "";
  
    styles.forEach((elem, idx) => {
      for (const key in styles[idx]) {
        stylesText += `${key}: ${styles[idx][key]}; `;
      }
    });
    return document.write(`<p style="${stylesText};">${text}</p>`);
  };
  
  const footerButton = createButton(listStyle, textButton);

  