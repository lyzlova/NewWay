"use strict";

//1. Написать функцию, которая принимает 2 числа и возвращает -1,
//  если первое меньше, чем второе; 1 – если первое больше,
// чем второе; и 0 – если числа равны.

const getNumber = (a, b) => {
  let num = 0;
  if (a < b) {
    num = -1;
  } else if (a > b) {
    num = 1;
  } else {
    num = 0;
  }
  return num;
};
const number = getNumber(6, 6);
console.log(number);

//2. Написать функцию, которая вычисляет факториал переданного ей числа.

const factorial = (num) => {
  let total = 1;

  for (let i = 1; i <= num; i += 1) {
    total = total * i;
  }
  return total;
};

const getFactoialNumber = factorial(5);
console.log(getFactoialNumber);

//3. Написать функцию, которая принимает три отдельные цифры
// и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

const concatNumber = (a = 0, b = 0, c = 0) => Number("" + a + b + c);

const oneNumber = concatNumber(1, 4, 9);
console.log(oneNumber);

// 4. Написать функцию, которая принимает длину и ширину
// прямоугольника и вычисляет его площадь. Если в функцию передали
// 1 параметр, то она вычисляет площадь квадрата.

const getSquare = (a, b = 0) => {
  if (b !== 0) {
    let squareRectangle = a * b;
    return squareRectangle;
  } else {
    let squareQuadrate = Math.pow(a, 2);
    return squareQuadrate;
  }
};

const rectangle = getSquare(5, 7);
console.log(rectangle);
const quadrate = getSquare(5);
console.log(quadrate);

// 5. Написать функцию, которая проверяет, является ли переданное
// ей число совершенным. Совершенное число – это число, равное
// сумме всех своих собственных делителей.

const getPerfectNumber = (number) => {
  let totalSum = 0;

  for (let i = 1; i < number; i += 1) {
    if (number % i === 0) {
      totalSum += i;
    }
  }
  if (totalSum === number) {
    return totalSum;
  }
};

const perfectNumber = getPerfectNumber(496);
console.log(perfectNumber);

// 6. Написать функцию, которая принимает минимальное и
// максимальное значения для диапазона, и выводит только те
// числа из диапазона, которые являются совершенными. Используйте
// написанную ранее функцию, чтобы узнавать, совершенное число или нет.

const findPerfectNumber = (minNumber, maxNumber) => {
  let listNumber = [];

  for (let i = minNumber; i <= maxNumber; i += 1) {
   let perfectNumber = getPerfectNumber(i);
   if(perfectNumber) {
     listNumber.push(perfectNumber);
   }
  }
  return listNumber;
};

const perfNum = findPerfectNumber(2, 496);
console.log(perfNum);

// 7. Написать функцию, которая принимает время (часы, минуты, секунды)
// и выводит его на экран в формате «чч:мм:сс».Если при вызове функции
// минуты и/или секунды не были переданы, то выводить их как 00.

const getTime = (hour = "00", min = "00", sec = "00") =>
  `${hour}:${min}:${sec}`;

const newTime = getTime(5, 34, 30);
console.log(newTime);

// 8. Написать функцию, которая принимает часы, минуты и секунды
// и возвращает это время в секундах.

const getSec = (hour, min, sec) => sec + min * 60 + hour * 60 * 60;

const getNewSec = getSec(1, 12, 5);
console.log(getNewSec);

// 9. Написать функцию, которая принимает количество секунд,
// переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

const createTimeString = (seconds) => {
  let hour = Math.floor(seconds / 60 / 60);
  let min = Math.floor(seconds / 60) - hour * 60;
  let sec = seconds % 60;

  return `${hour}:${min}:${sec}`;
};
const newStringTime = createTimeString(4325);
console.log(newStringTime);
// 10. Написать функцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2 даты,
// и возвращает результат в виде строки «чч:мм:сс». При выполнении
// задания используйте функции из предыдущих 2-х заданий:
// сначала обе даты переведите в секунды, узнайте разницу в секундах,
//  а потом разницу переведите обратно в «чч:мм:сс»

const getDifferenceDate = (hour1, min1, sec1, hour2, min2, sec2) => {
  const getSecDate1 = getSec(hour1, min1, sec1);
  console.log(getSecDate1);
  const getSecDate2 = getSec(hour2, min2, sec2);
  console.log(getSecDate2);
  const distriction = getSecDate1 > getSecDate2 ? getSecDate1 - getSecDate2 : getSecDate2 - getSecDate1;
  console.log(distriction);
  return createTimeString(distriction);
};

const firstDate = getDifferenceDate(3, 35, 6, 1, 15, 8);
console.log(firstDate);
