"use strict";
// 1. Создать объект, описывающий автомобиль (производитель,
//   модель, год выпуска, средняя скорость), и следующие функции
//   для работы с этим объектом:

// Функция для вывода на экран информации об автомобиле;

// Функция для подсчета необходимого времени для преодоления
// переданного расстояния со средней скоростью. Учтите,
//  что через каждые 4 часа дороги водителю необходимо делать
//   перерыв на 1 час.

const car = {
  manufacturer: "Range Rover",
  model: "Range Rover Evoque",
  yearManufacture: 2020,
  averageSpeed: 80,
  getDescription() {
    return `Manufacturer: ${this.manufacturer}, Model: ${this.model}, YearManufacture: ${this.yearManufacture}, AverageSpeed: ${this.averageSpeed}`;
  },
  calculatTime(distance) {
    let time = distance / this.averageSpeed;
    for (let hour = 1; hour <= time; hour += 1) {
      if (hour % 4 === 0) {
        time += 1;
      }
    }
    return time;
  },
};

console.log(car.getDescription());
console.log(car.calculatTime(720));

// 2. Создать объект, хранящий в себе отдельно числитель и
// знаменатель дроби, и следующие функции для работы с этим объектом:

// Функция сложения 2-х объектов-дробей;
// Функция вычитания 2-х объектов-дробей;
// Функция умножения 2-х объектов-дробей;
// Функция деления 2-х объектов-дробей;
// Функция сокращения объекта-дроби.

const fraction1 = {
  num: 2,
  num2: 5,
};

const fraction2 = {
  num: 3,
  num2: 6,
};

const fractions = {
  numerator: 0,
  denominator: 0,
  commonDivider(num1, num2) {
    let gcd = 0;
    if (Math.max(num1, num2) % Math.min(num1, num2) === 0) {
      gcd = Math.min(num1, num2);
    } else {
      gcd = this.commonDivider(
        Math.max(num1, num2) % Math.min(num1, num2),
        Math.min(num1, num2)
      );
    }
    return gcd;
  },
  showResult(numerator, denominator) {
    const gcd = this.commonDivider(numerator, denominator);
    if (gcd > 0) {
      return `${this.numerator / gcd}/${this.denominator / gcd}`;
    }
    return `${this.numerator}/${this.denominator}`;
  },
  add(fraction1, fraction2) {
    if (fraction1.num2 === fraction2.num2) {
      this.numerator = fraction1.num + fraction2.num;
      this.denominator = fraction1.num2;
    } else {
      this.numerator =
        fraction1.num2 * fraction2.num + fraction2.num2 * fraction1.num;
      this.denominator = fraction1.num2 * fraction2.num2;
    }

    return this.showResult(this.numerator, this.denominator);
  },
  substraction(fraction1, fraction2) {
    if (fraction1.num2 === fraction2.num2) {
      this.numerator = fraction1.num - fraction2.num;
      this.denominator = fraction1.num2;
    } else {
      this.numerator =
        fraction1.num * fraction2.num2 - fraction2.num * fraction1.num2;
      this.denominator = fraction1.num2 * fraction2.num2;
    }

    return this.showResult(this.numerator, this.denominator);
  },
  multiply(fraction1, fraction2) {
    this.numerator = fraction1.num * fraction2.num;
    this.denominator = fraction1.num2 * fraction2.num2;

    return this.showResult(this.numerator, this.denominator);
  },
  division(fraction1, fraction2) {
    this.numerator = fraction1.num * fraction2.num2;
    this.denominator = fraction1.num2 * fraction2.num;

    return this.showResult(this.numerator, this.denominator);
  },
};

const addFractions = fractions.add(fraction1, fraction2);
console.log(addFractions);
const substractionFractions = fractions.substraction(fraction1, fraction2);
console.log(substractionFractions);
const multiplyFractions = fractions.multiply(fraction1, fraction2);
console.log(multiplyFractions);
const divisionFractions = fractions.division(fraction1, fraction2);
console.log(divisionFractions);

// 3. Создать объект, описывающий время (часы, минуты, секунды),
// и следующие функции для работы с этим объектом:
// Функция вывода времени на экран;

// Функция изменения времени на переданное количество секунд;
// Функция изменения времени на переданное количество минут;
// Функция изменения времени на переданное количество часов.

// Учтите, что в последних 3-х функциях, при изменении одной
// части времени, может измениться и другая. Например, если
// ко времени «20:30:45» добавить 30 секунд, то должно
// получиться «20:31:15», а не «20:30:75».

const time = {
  hour: 4,
  minute: 45,
  second: 9,
  showTime() {
    return `${this.hour} hour ${this.minute} minute ${this.second} second`;
  },
  changeSecond(seconds) {
    if (Number.isNaN(+seconds)) {
      this.second = this.second;
    } else {
      this.minute += Math.floor(seconds / 60);
      this.second += seconds % 60;
    }
    return this.showTime();
  },

  changeMinute(minute) {
    if (Number.isNaN(+minute)) {
      this.minute = this.minute;
    } else {
      this.hour += Math.floor(minute / 60);
      this.minute += minute % 60;
    }
    return this.showTime();
  },

  changeHour(hour) {
    if (Number.isNaN(+hour)) {
      this.hour = this.hour;
    } else {
      this.hour += hour;
    }
    return this.showTime();
  },
};

const newShowTime = time.showTime();
console.log(newShowTime);
const changeSecond = time.changeSecond(3089);
console.log(changeSecond);
const changeMinute = time.changeMinute(3);
console.log(changeMinute);
const changeHour = time.changeHour(3);
console.log(changeHour);
