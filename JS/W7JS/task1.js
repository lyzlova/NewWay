"use strict";

const root = document.getElementById("root");
// 1) Реализовать класс, описывающий окружность.
// В классе должны быть следующие компоненты:
// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(radius) {
    this._radius = radius;
  }

  get diametre() {
    return (this._radius *= 2);
  }

  square() {
    return 3.14 * Math.pow(this.radius, 2);
  }

  length() {
    return 2 * 3.14 * this.radius;
  }
}

const newCircle = new Circle(5);
newCircle.radius = 10;
console.log(newCircle.radius);
console.log(newCircle.diametre);
console.log(newCircle.square());
console.log(newCircle.length());

// 2) Реализовать класс, описывающий простой маркер.
// В классе должны быть следующие компоненты:
// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст
//   соответствующим цветом; текст выводится до тех пор, пока
//    в маркере есть чернила; один не пробельный символ – это
//    0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер,
//  унаследовав его от простого маркера и добавив метод для заправки маркера.
// Продемонстрировать работу написанных методов.

class Marker {
  constructor(color, amountInk) {
    this.color = color;
    this.amountInk = amountInk;
  }
  print(text) {
    const lengthWithoutGap = text.split(" ").join("").length;
    this.amountInk = this.amountInk - lengthWithoutGap * 0.5;
    if (this.amountInk > 0) {
      const title = document.createElement("h2");
      title.textContent = text;
      title.style.color = this.color;
      root.insertAdjacentElement("beforeend", title);
    }
  }
}

const newMarKer = new Marker("red", 5);
newMarKer.print("Titlebbss");

class BlueMarker extends Marker {
  constructor(color, amountInk, fuel) {
    super(color, amountInk);
    this.fuel = fuel;
  }

  get prime() {
    return (this.amountInk += this.fuel);
  }
}

const newPrime = new BlueMarker("blue", 7, 12);
console.log(newPrime.prime);

newPrime.print("Titlebb sbbbbbssvvvvvbbbbbbbbbbbbbbbbh");
console.log(newPrime.amountInk);

// 3) Реализовать класс Employee, описывающий работника, и
// создать массив работников банка.
// Реализовать класс EmpTable для генерации HTML-кода таблицы
//  со списком работников банка. Массив работников необходимо
//  передавать через конструктор, а получать HTML-код с помощью
//   метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат
// работы метода getHtml().

const employeeList = [
  { name: "Dusty", position: ".NET" },
  { name: "Misty", position: "Java" },
  { name: "Twiggy", position: "Ruby" },
];

class Employee {
  constructor(name, position, arrEmployeeList) {
    this.name = name;
    this.position = position;
    this.arrEmployeeList = arrEmployeeList;
  }

  createEmployeeList() {
    const newEmployee = { name: this.name, position: this.position };
    this.arrEmployeeList.push(newEmployee);
  }
}

class EmpTable extends Employee {
  constructor() {
    super(employeeList);
    this.employeeList = employeeList;
  }
  getHtml() {
    const table = document.createElement("table");
    root.insertAdjacentElement("beforeend", table);

    this.employeeList.forEach((employeeObj) => {
      const tableRow = document.createElement("tr");
      const tableDataName = document.createElement("td");
      const tableDataPosition = document.createElement("td");
      tableDataName.innerText = employeeObj.name;
      tableDataPosition.innerText = employeeObj.position;
      tableRow.append(tableDataName, tableDataPosition);
      table.append(tableRow);
    });
  }
}

const newEmployee = new Employee("Jon", "QA", employeeList);
newEmployee.createEmployeeList();

const newEmpTable = new EmpTable();
newEmpTable.getHtml();
