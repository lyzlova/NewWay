"use strict";

const block1 = document.getElementById("block2");
const newList = document.createElement("ul");
block1.append(newList);

// 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
function getInfo1() {
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const h1 = document.getElementById("getInfo1");
  let value1 = Number(input1.value);
  const value2 = Number(input2.value);
  const valid1Value =
    !Number.isNaN(value1) && value1.length !== 0 && value1 !== 0;
  const valid2Value =
    !Number.isNaN(value2) && value2.length !== 0 && value2 !== 0;
  let i = 0;
  let sum = 0;

  if (valid1Value && valid2Value) {
    while (value1 <= value2) {
      sum += value1;
      value1 += 1;
    }
    h1.innerText = `Сумма всех чисел в заданном пользователем диапазоне ${sum}`;
  } else {
    h1.innerText = `Вы ввели не число`;
  }
}

// 2. Запросить у пользователя число и вывести все делители этого числа.

function getInfo2() {
  const input3 = document.getElementById("input3");
  const h2 = document.getElementById("getInfo2");
  let value = Number(input3.value);
  const valid1Value = !Number.isNaN(value) && value.length !== 0 && value !== 0;

  if (valid1Value) {
    for (let i = 1; i <= value; i += 1) {
      if (value % i === 0) {
        const item = document.createElement("li");
        item.append(i);
        newList.append(item);
      }
    }
  } else {
    h2.innerText = `Вы ввели не число`;
  }
}

// 3. Определить количество цифр в введенном числе.
function getInfo3() {
  const input4 = document.getElementById("input4");
  const h3 = document.getElementById("getInfo3");
  const value = input4.value;
  const valid1Value =
    !Number.isNaN(Number(value)) && value.length !== 0 && value !== 0;
  let numberLenght = 0;

  if (valid1Value) {
    numberLenght = value.length;
    h3.innerText = `В введеном числе ${numberLenght} цыфр`;
  } else {
    h3.innerText = `Вы ввели не число`;
  }
}

// 4. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел
// положительных, отрицательных и нулей. При этом также посчитать,
// сколько четных и нечетных. Вывести статистику на экран. Учтите,
//  что достаточно одной переменной (не 10) для ввода чисел пользователем.

function getInfo4() {
  const input5 = document.getElementById("input5");
  const h4 = document.getElementById("getInfo4");
  const value = input5.value;
  const numbers = value.split(",");
  let evenNumbers = 0;
  let addNumbers = 0;
  let zeroNumbers = 0;
  let positiveNumbers = 0;
  let negativeNumbers = 0;

  for (let num of numbers) {
    let validNum = Number(num);

    if (validNum % 2 === 0) {
      evenNumbers += 1;
    } else {
      addNumbers += 1;
    }

    if (validNum > 0) {
      positiveNumbers += 1;
    } else if (validNum < 0) {
      negativeNumbers += 1;
    } else {
      zeroNumbers += 1;
    }
  }
  h4.innerText = `В введеном числе ${positiveNumbers} положительных цыфр,
  ${negativeNumbers} отрицательных цыфр, ${zeroNumbers} нулей, ${evenNumbers} четных цыфр и ${addNumbers} нечетных цыфр`;
}

// 5. Запросить у пользователя число и на сколько цифр его сдвинуть.
// Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть
//  на 2 цифры, то получится 345612).
function getInfo5() {
  const input6 = document.getElementById("input6");
  const input7 = document.getElementById("input7");
  const h5 = document.getElementById("getInfo5");
  let value1 = input6.value;
  let value2 = input7.value;
  const valid1Value =
    !Number.isNaN(value1) && value1.length !== 0 && value1 !== 0;
  const valid2Value =
    !Number.isNaN(value2) && value2.length !== 0 && value2 !== 0;
  let newNumber = "";

  if (valid1Value && valid2Value) {
    newNumber = value1.substring(value2) + value1.substring(0, value2);
    h5.innerText = `Вы ввели не число ${newNumber}`;
  } else {
    h5.innerText = `Вы ввели не число`;
  }
}

// 6. Зациклить вывод дней недели таким образом: «День недели. Хотите
// увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

function getInfo6() {
  const input8 = document.getElementById("input8");
  const h6 = document.getElementById("getInfo6");
  const value1 = input8.value;
  const valid1Value =
    value1.length !== 0 && value1 !== 0 && Number.isNaN(Number(value1));
  const days = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
  ];

  const validDay = value1.toLowerCase();
  if (valid1Value) {
    for (let i = 0; i < days.length; i += 1) {
      if (validDay === days[i]) {
        while (confirm(`${days[i]}. Хотите увидеть следующий день?`)) {
          i = (i + 1) % days.length;
        }
      } else {
        h6.innerText = `Вы ввели не верно`;
      }
    }
  }
}

// 7. Зациклить калькулятор. Запросить у пользователя 2 числа и знак,
//  решить пример, вывести результат и спросить, хочет ли он решить
// еще один пример. И так до тех пор, пока пользователь не откажется.

function getInfo7() {
  do {
    var number1 = +prompt("Введите первое число");
    var number2 = +prompt("Введите второе число");
    var sign = prompt("Выберите знак - + / *");

    switch (sign) {
      case "+":
        alert(`Ваш результат: ${number1 + number2}`);
        break;
      case "-":
        alert(`Ваш результат: ${number1 + number2}`);
        break;
      case "/":
        alert(`Ваш результат: ${number1 + number2}`);
        break;
      case "*":
        alert(`Ваш результат: ${number1 + number2}`);
      default:
        break;
    }
  } while (confirm("Хотите ли вы решить еще один пример?"));
}

// 8. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое
// число необходимо умножить на числа от 1 до 10.

function getInfo8() {
  const table = document.createElement("table");
  block8.append(table);

  for (let i = 0; i < 9; i += 1) {
    const tr = document.createElement("tr");
    table.append(tr);
    for (let j = 0; j < 10; j += 1) {
      const td = document.createElement("td");
      tr.append(td);
      td.innerHTML = (j + 1) * (i + 1);
    }
  }
}

// 9. Запросить 2 числа и найти только наибольший общий делитель.
function getInfo9() {
  const input1 = document.getElementById("input9");
  const input2 = document.getElementById("input10");
  let value1 = input1.value;
  let value2 = input2.value;
  const h9 = document.getElementById("getInfo9");

  const valid1Value = value1.length !== 0 && !Number.isNaN(Number(value1));
  const valid2Value = value2.length !== 0 && !Number.isNaN(Number(value2));

  if (valid1Value && valid2Value) {
    if (value1 === 0) {
      h9.innerText = `Наибольший общий делитель ${value1}`;
    }

    while (value2 !== 0) {
      if (value1 > value2) {
        value1 = value1 - value2;
      } else {
        value2 = value2 - value1;
      }
      h9.innerText = `Наибольший общий делитель ${value1}`;
    }
  } else {
    h9.innerText = `Вы ввели не число`;
  }
}

// 10. Игра «Угадай число». Предложить пользователю загадать число
// от 0 до 100 и отгадать его следующим способом: каждую итерацию
//  цикла делите диапазон чисел пополам, записываете результат в N и
// спрашиваете у пользователя «Ваше число > N, < N или == N?».
// В зависимости от того, что указал пользователь, уменьшаете диапазон.
// Начальный диапазон от 0 до 100, поделили пополам и получили 50.
// Если пользователь указал, что его число > 50, то изменили диапазон
// на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

function getInfo10() {
  const h10 = document.getElementById("getInfo10");
  let quadrant = 25;
  let number = 50;
  let i = 1;

  while (true) {
    const userRezult = prompt(
      `Введите 1, если ваше число больше ${number}. Введите 2, если ваше число меньше ${number}. Введите 0, если ваше число равно ${number}`
    );

    const validValue = userRezult !== "" && userRezult !== null;

    if (validValue) {
      const userNumber = Number(userRezult);
      if (userNumber === 0) {
        h10.innerText = `Вы отгадали свое число`;
        return;
      } else if (userNumber === 1) {
        number = number + quadrant;
        i += 1;
        quadrant = Math.round(quadrant / 2 + 1);
      } else if (userNumber === 2) {
        number = number - quadrant;
        i += 1;
        quadrant = Math.round(quadrant / 2);
      }
      if (number < 0 || number > 100) {
        h10.innerText = `Вашего числа нет в этом диапазоне. Начните заново`;
        return;
      }
    } else {
      h10.innerText = `Вы ввели не число`;
    }
  }
}
