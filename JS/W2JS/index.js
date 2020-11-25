"use strict";

// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2),
// подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

function getInfo1() {
  const input1 = document.getElementById("input1");
  const h1 = document.getElementById("getInfo1");
  const value = input1.value;
  const validValue = !Number.isNaN(Number(value)) && value.length !== 0;

  const child = value >= 0 && value <= 11;
  const teenager = value >= 12 && value <= 17;
  const adult = value >= 18 && value <= 59;
  const pensioner = value >= 60 && value <= 120;

  if (validValue) {
    if (child) {
      h1.innerText = `You are a child!`;
    } else if (teenager) {
      h1.innerText = `You are a teenager!`;
    } else if (adult) {
      h1.innerText = `You are a adult!`;
    } else if (pensioner) {
      h1.innerText = `You are a pensioner!`;
    } else {
      h1.innerText = `You are a old!`;
    }
  } else {
    h1.innerText = `Enter your age`;
  }
}

// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен
// на этой клавише (1–!, 2–@, 3–# и т. д).

function getInfo2() {
  const input2 = document.getElementById("input2");
  const h2 = document.getElementById("getInfo2");
  const value = Number(input2.value);
  const validValue = !Number.isNaN(value) && value.length !== 0;

  if (validValue) {
    switch (value) {
      case 0:
        h2.innerText = `Your special character is ')'`;
        break;
      case 1:
        h2.innerText = `Your special character is '!'`;
        break;
      case 2:
        h2.innerText = `Your special character is '@'`;
        break;
      case 3:
        h2.innerText = `Your special character is '#'`;
        break;
      case 4:
        h2.innerText = `Your special character is '$'`;
        break;
      case 5:
        h2.innerText = `Your special character is '%'`;
        break;
      case 6:
        h2.innerText = `Your special character is '^'`;
        break;
      case 7:
        h2.innerText = `Your special character is '&'`;
        break;
      case 8:
        h2.innerText = `Your special character is '*'`;
        break;
      case 9:
        h2.innerText = `Your special character is '('`;
        break;
      default:
        h2.innerText = `You entered a value greater than 9`;
        break;
    }
  } else {
    h2.innerText = `Enter a number`;
  }
}

// Запросить у пользователя трехзначное число и проверить,
// есть ли в нем одинаковые цифры.

function getInfo3() {
  const input3 = document.getElementById("input3");
  const h3 = document.getElementById("getInfo3");
  const value = input3.value;
  const validNum = !Number.isNaN(value) && value.length === 3;
  const number1 = parseInt(value / 100);
  const number2 = parseInt(value / 10) % 10;
  const number3 = value % 10;

  if (validNum) {
    if (number1 === number2 || number1 === number3 || number2 === number3) {
      h3.innerText = `Число содержит одинаковые числа`;
    } else {
      h3.innerText = `Число не содержит одинаковые числа`;
    }
  } else {
    h3.innerText = `Вы ввели не трехзначное число`;
  }
}

// Запросить у пользователя год и проверить, високосный он или нет.
//  Високосный год либо кратен 400, либо кратен 4
// и при этом не кратен 100.

function getInfo4() {
  const input4 = document.getElementById("input4");
  const h4 = document.getElementById("getInfo4");
  const value = input4.value;
  const validLength = Number.isNaN(value) && value.length !== 0;
  const year = Number(value);
  const validYear = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

  if (validLength) {
    if (validYear) {
      h4.innerText = `Ваш год высокосный`;
    } else {
      h4.innerText = `Ваш год не высокосный`;
    }
  } else {
    h4.innerText = `Введите год в формате 'гггг'`;
  }
}

// Запросить у пользователя пятиразрядное число и определить,
// является ли оно палиндромом.

function getInfo5() {
  const input5 = document.getElementById("input5");
  const h5 = document.getElementById("getInfo5");

  const value = input5.value;
  const validValue = !Number.isNaN(value) && value.length > 4;
  let valid = Number(value);

  if (validValue) {
    h5.innerText = ``;
    const num5 = valid % 10;
    valid = Math.floor(valid / 10);
    const num4 = valid % 10;
    valid = Math.floor(valid / 10);
    const num3 = valid % 10;
    valid = Math.floor(valid / 10);
    const num2 = valid % 10;
    const num1 = Math.floor(valid / 10);

    if (num5 === num1 && num4 === num2) {
      h5.innerText = `Число палиндр`;
    } else {
      h5.innerText = `Число не палиндр`;
    }
  } else {
    h5.innerText = `Введите пятиразрядное число`;
  }
}

// Написать конвертор валют. Пользователь вводит количество USD,
// выбирает, в какую валюту хочет перевести EUR, UAN или AZN,
// и получает в ответ соответствующую сумму.

function getInfo6() {
  const input6 = document.getElementById("input6");
  const h6 = document.getElementById("getInfo6");
  const getCurrency = document.getElementById("currency");

  const valueMoney = input6.value;
  let valid = Number(valueMoney);
  const currency = getCurrency.value;

  const ua = 28.36;
  const eur = 0.84;
  const azn = 1.7;

  switch (currency) {
    case "UAN":
      const moneyUa = (valid * ua).toFixed(2);
      h6.innerText = `Ваши ${moneyUa} грн`;
      break;
    case "EUR":
      const moneyEur = (valid * eur).toFixed(2);
      h6.innerText = `Ваши ${moneyEur} eur`;
      break;
    case "AZN":
      const moneyAzn = (valid * azn).toFixed(2);
      h6.innerText = `Ваши ${moneyAzn} azn`;
      break;
    default:
      h6.innerText = `Вы ввели неправильно сумму`;
      break;
  }
}

// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
// от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

function getInfo7() {
  const input7 = document.getElementById("input7");
  const h7 = document.getElementById("getInfo7");

  const amount = input7.value;
  const validValue = Number(amount);
  let validAmound = !Number.isNaN(validValue) && amount.length !== 0;

  if (validAmound) {
    if (validValue >= 200 && validValue <= 299) {
      const discount = (validValue - validValue * 0.03).toFixed(2);
      h7.innerText = `Cуммa к оплате со скидкой ${discount} грн`;
    } else if (validValue >= 300 && validValue <= 499) {
      const discount = (validValue - validValue * 0.05).toFixed(2);
      h7.innerText = `Cуммa к оплате со скидкой ${discount} грн`;
    } else if (validValue > 500) {
      const discount = (validValue - validValue * 0.07).toFixed(2);
      h7.innerText = `Cуммa к оплате со скидкой ${discount} грн`;
    } else {
      const discount = validValue;
      h7.innerText = `У вас нет скидки. Cуммa к оплате ${discount} грн`;
    }
  } else {
    h7.innerText = `Вы ввели не число`;
  }
}

// Запросить у пользователя длину окружности и периметр квадрата.
// Определить, может ли
// такая окружность поместиться в указанный квадрат.
function getInfo8() {
  const input8 = document.getElementById("input8");
  const input9 = document.getElementById("input9");
  const h8 = document.getElementById("getInfo8");
  const value1 = input8.value;
  const value2 = input9.value;
  const validValue1 = Number(value1);
  const validValue2 = Number(value2);
  let validAmound =
    !Number.isNaN(validValue1) &&
    value1.length !== 0 &&
    !Number.isNaN(validValue2) &&
    value2.length !== 0;

  const p = 3.14;
  const radius = value1 / (2 * p);
  const diameter = 2 * radius;
  const sideA = value2 / 2;
  const valid = sideA >= diameter && sideA > 0;

  if (validAmound) {
    if (valid) {
      h8.innerText = `Такая окружность поместиться в указанный квадрат`;
    } else {
      h8.innerText = `Такая окружность не поместиться в указанный квадрат`;
    }
  } else {
    h8.innerText = `Введите числа`;
  }
}

// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный
// ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

function getInfo9() {
  const input11 = document.getElementById("quastion2");
  const input12 = document.getElementById("quastion4");
  const input13 = document.getElementById("quastion9");
  const input11Checked = input11.checked;
  const input12Checked = input12.checked;
  const input13Checked = input13.checked;
  const score = 2;
  let sumScore = 0;

  if (input11Checked && input12Checked && input13Checked) {
    sumScore = score * 3;
    alert(`Количество набранных баллов ${sumScore}`);
  } else if (!input11Checked && input12Checked && input13Checked) {
    sumScore = score * 2;
    alert(`Количество набранных баллов ${sumScore}`);
  } else if (input11Checked && !input12Checked && input13Checked) {
    sumScore = score * 2;
    alert(`Количество набранных баллов ${sumScore}`);
  } else if (input11Checked && input12Checked && !input13Checked) {
    sumScore = score * 2;
    alert(`Количество набранных баллов ${sumScore}`);
  } else if (!input11Checked && !input12Checked && input13Checked) {
    sumScore = score;
    alert(`Количество набранных ${sumScore}`);
  } else if (!input11Checked && input12Checked && !input13Checked) {
    sumScore = score;
    alert(`Количество набранных ${sumScore}`);
  } else if (input11Checked && !input12Checked && !input13Checked) {
    sumScore = score;
    alert(`Количество набранных ${sumScore}`);
  } else {
    alert(`Количество набранных баллов ${sumScore}`);
  }
}

// Запросить дату (день, месяц, год) и вывести следующую за ней дату.
// Учтите возможность перехода
// на следующий месяц, год, а также високосный год.
function getInfo10() {
  const input10 = document.getElementById("input10");
  const input11 = document.getElementById("input11");
  const input12 = document.getElementById("input12");
  const h10 = document.getElementById("getInfo10");

  const dayValue = input10.value;
  const monthValue = input11.value;
  const yearValue = input12.value;

  let day = Number(dayValue);
  let month = Number(monthValue);
  let year = Number(yearValue);

  const validDay =
    !Number.isNaN(dayValue) &&
    dayValue.length <= 2 &&
    day <= 31 &&
    dayValue.length !== 0;
  const validMonth =
    !Number.isNaN(monthValue) &&
    monthValue.length <= 2 &&
    month <= 12 &&
    monthValue.length !== 0;

  const validIntercalaryYear =
    year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  const validYear = !Number.isNaN(yearValue) && yearValue.length !== 0;
  const valid = validDay && validMonth && validYear;

  if (valid) {
    day += 1;
    if (day > 31) {
      day = 1;
      month += 1;
    }
    if (month > 12) {
      month = 1;
      year += 1;
    }
    if (!validIntercalaryYear && day > 28 && month === 2) {
      day = 1;
      month += 1;
    }
    if (validIntercalaryYear && day > 28 && month === 2) {
      day = 1;
      month += 1;
    }

    let date = `${year} / ${month} / ${day}`;
    h10.innerText = `${day} / ${month} / ${year} `;
  } else {
    h10.innerText = `Введите день, месяц, год в формате дд/ММ/гггг`;
  }
}
