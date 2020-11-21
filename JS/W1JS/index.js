"use strict";
// Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».

function updateName() {
  const input1 = document.getElementById("input1");
  const h1 = document.getElementById("name");
  const value = input1.value;

  h1.innerText = `Привет, ${value}!`;
}

// Запросите у пользователя год его рождения, посчитайте, сколько ему лет и
// выведите результат. Текущий год укажите в коде как константу.

function updateYear() {
  const input2 = document.getElementById("input2");
  const h2 = document.getElementById("bornYear");
  const value2 = input2.value;

  const currentYear = 2020;
  const currentOld = currentYear - Number(value2);
  h2.innerText = `Тебе ${currentOld}!`;
}

// Запросите у пользователя длину стороны квадрата и выведите
// периметр такого квадрата.

function perimeterSquare() {
  const input3 = document.getElementById("input3");
  const h3 = document.getElementById("perimeterSquare");
  const value3 = input3.value;
  const perimeterSquare = 4 * Number(value3);

  h3.innerText = `Периметр квадрата равен ${perimeterSquare}!`;
}

// Запросите у пользователя радиус окружности и выведите площадь такой окружности.

function radius() {
  const input4 = document.getElementById("input4");
  const h4 = document.getElementById("radius");
  const value4 = input4.value;
  const p = 3.14;
  const radius = p * Math.pow(Number(value4), 2);
  h4.innerText = `Площадь окружности равна ${radius}!`;
}

// Запросите у пользователя расстояние в км между двумя городами и за сколько
// часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться,
// чтобы успеть вовремя.

function speed() {
  const input5 = document.getElementById("input5");
  const input6 = document.getElementById("input6");
  const h5 = document.getElementById("speed");
  const value5 = input5.value;
  const value6 = input6.value;

  const distance = Number(value5);
  const time = Number(value6);
  const speed = distance / time;
  h5.innerText = `Скорость равна ${speed}!`;
}

// Реализуйте конвертор валют. Пользователь вводит доллары, программа
// переводит в евро. Курс валюты храните в константе.

function converter() {
  const input7 = document.getElementById("input7");
  const h6 = document.getElementById("converter");
  const value7 = input7.value;
  const dollar = 28;
  const euro = 32;
  const converter = (value7 * dollar) / euro;
  h6.innerText = `Ваши ${converter} евро!`;
}

// Запросить 2 числа и вывести большее из них.

function greaterNumber() {
  const input8 = document.getElementById("input8");
  const input9 = document.getElementById("input9");
  const h7 = document.getElementById("greaterNumber");
  const num1 = Number(input8.value);
  const num2 = Number(input9.value);
  num1 > num2
    ? (h7.innerText = `The greater number is ${num1}`)
    : (h7.innerText = ``);
}

// Запросить у пользователя время (часы, минуты, секунды) и проверить
// корректность введенных данных.

function correctTime() {
  const input10 = document.getElementById("input10");
  const input11 = document.getElementById("input11");
  const input12 = document.getElementById("input12");
  const h8 = document.getElementById("correctTime");
  const hours = Number(input10.value);
  const minutes = Number(input11.value);
  const seconds = Number(input12.value);
  const chechHrs = hours <= 24 && hours >= 0;
  const chechMin = minutes <= 60 && minutes >= 0;
  const chechSec = seconds <= 60 && seconds >= 0;
  if (chechHrs && chechMin && chechSec) {
    h8.innerText = `Your time is correct ${hours}:${minutes}:${seconds}`;
  } else if (!chechHrs && chechMin && chechSec) {
    h8.innerText = `Your entered incorrectly hours`;
  } else if (chechHrs && !chechMin && chechSec) {
    h8.innerText = `Your entered incorrectly minutes`;
  } else if (chechHrs && chechMin && !chechSec) {
    h8.innerText = `Your entered incorrectly seconds`;
  } else if (!chechHrs && !chechMin && chechSec) {
    h8.innerText = `Your entered incorrectly hours and minutes`;
  } else if (!chechHrs && chechMin && !chechSec) {
    h8.innerText = `Your entered incorrectly hours and seconds`;
  } else if (chechHrs && !chechMin && !chechSec) {
    h8.innerText = `Your entered incorrectly minutes and seconds`;
  } else {
    h8.innerText = `You entered incorrectly time`;
  }
}

// Запросить у пользователя номер месяца и вывести на экран его название.

function month() {
  const input13 = document.getElementById("input13");
  const h9 = document.getElementById("month");
  const correctValue = Number(input13.value);
  switch (correctValue) {
    case 1:
      h9.innerText = `This is january!`;
      break;
    case 2:
      h9.innerText = `This is February!`;
      break;
    case 3:
      h9.innerText = `This is March!`;
      break;
    case 4:
      h9.innerText = `This is April!`;
      break;
    case 5:
      h9.innerText = `This is May!`;
      break;
    case 6:
      h9.innerText = `This is June!`;
      break;
    case 7:
      h9.innerText = `This is Jule!`;
      break;
    case 8:
      h9.innerText = `This is August!`;
      break;
    case 9:
      h9.innerText = `This is September!`;
      break;
    case 10:
      h9.innerText = `This is November!`;
      break;
    case 11:
      h9.innerText = `This is December!`;
      break;
    default:
      h9.innerText = `This does not exist!`;
      break;
  }
}

// Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов
// размером в 820 Мб помещается на флешку.

function memorySize() {
  const input14 = document.getElementById("input14");
  const input15 = document.getElementById("input15");
  const h10 = document.getElementById("memorySize");
  const gB = Number(input14.value);
  const mB = Number(input15.value);
  const memorySize = 1000;
  const fullMemorySizeGb = gB * memorySize;
  const files = Math.floor(fullMemorySizeGb / mB);
  h10.innerText = `На флешку помещается ${files} файлов размером в ${mB} Мб`;
}

// Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа
// выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.

function yourChocolate() {
  const input16 = document.getElementById("input16");
  const input17 = document.getElementById("input17");
  const h11 = document.getElementById("yourChocolate");
  const money = Number(input16.value);
  const priceOneChocolate = Number(input17.value);
  const youCanBuyChocolate = money / priceOneChocolate;
  const yourChocolate = Math.floor(youCanBuyChocolate);
  const change = money - yourChocolate * priceOneChocolate;
  const grn = Math.floor(change);
  const coins = Number((change - grn).toFixed(2));
  h11.innerText = `Вы может купить ${yourChocolate} шоколадок, ваша сдача ${grn} грн ${coins} копеек`;
}

// Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения
// задачи вам понадобится оператор % (остаток от деления).

function reverse() {
  const input18 = document.getElementById("input18");
  const h12 = document.getElementById("reverse");
  let number1 = input18.value;
  let number2 = 0;
  let number3 = 0;
  let lastNumber = number1 % 10;
  if (number1.length === 3) {
    number1 = number1 / 10;
    number2 = Math.trunc(number1) % 10;
    number3 = Math.trunc(number1 / 10) % 10;
    lastNumber = `${lastNumber}${number2}${number3}`;
    h12.innerText = `${lastNumber}`;
  } else {
    h12.innerText = `Вы ввели не трехзначное число`;
  }
}

// Пользователь вводит сумму вклада в банк на 2 месяца, с процентной
// ставкой депозита 5% годовых.
// Вывести сумму начисленных процентов.

function percent() {
  const input19 = document.getElementById("input19");
  const h13 = document.getElementById("percent");
  const initial = Number(input19.value);
  const interest = 0.05;
  const time = 2 / 12;
  let result = Math.round(initial * (1 + interest * time)) - initial;
  h13.innerText = `Ваша сумма вклада ${result} грн`;
  console.log(result);

  // const initial = Number(value);
  // const interest = 5;
  // const dayInYear = 364;
  // const dayInTwoMonth = 61;
  // let result = Math.round((initial * interest * dayInTwoMonth) / dayInYear / 100);
  // h13.innerText = `Ваша сумма вклада ${result} грн`;
}
