"use strict";
const root = document.getElementById("root");
// 1. Создать массив «Список покупок». Каждый элемент массива является
// объектом, который содержит название продукта, необходимое количество
//  и куплен или нет.
// Написать несколько функций для работы с таким массивом.

const shopList = [
  { name: "bread", amount: 1, bought: false },
  { name: "eggs", amount: 20, bought: true },
  { name: "milk", amount: 2, bought: false },
  { name: "cheese", amount: 3, bought: true },
];

// 1. Вывод всего списка на экран таким образом, чтобы сначала шли некупленные
// продукты, а потом – купленные.

const sortShopListByBought = [...shopList].sort((obj) => {
  return obj.bought - !obj.bought;
});

const showShopList = (arr) => {
  const productsList = document.createElement("ul");
  productsList.style.marginBottom = "20px";
  root.append(productsList);

  for (const obj of arr) {
    const item = document.createElement("li");
    item.innerText = `name: ${obj.name}, amount: ${obj.amount}, bought: ${obj.bought}`;
    productsList.append(item);
  }
};
showShopList(sortShopListByBought);

// 2. Добавление покупки в список. Учтите, что при добавлении покупки с уже
// существующим в списке продуктом, необходимо увеличивать количество в
// существующей покупке, а не добавлять новую.

const newShopList = [
  { name: "bread", amount: 2, bought: true },
  { name: "milk", amount: 1, bought: true },
  { name: "cheese", amount: 2, bought: true },
  { name: "meat", amount: 2, bought: true },
  { name: "chocolate", amount: 6, bought: true },
];

const addPurchases = (firstShopList, addShopList) => {
  firstShopList.forEach((firstObj) => {
    addShopList.forEach((addObj) => {
      const find = firstShopList.find(
        (firstObj) => firstObj.name === addObj.name
      );
      if (!find){
        firstShopList.push(addObj);
      }
      if(firstObj.name === addObj.name) {
        firstObj.amount += addObj.amount
      }
    });
  });
};

addPurchases(shopList, newShopList);
showShopList(shopList);

// 3. Покупка продукта. Функция принимает название продукта и отмечает
// его как купленный.

const changeBoughtStatus = (productList, product) => {
  const findProduct = productList.find((obj) => obj.name === product);
  findProduct.bought = true;
  return findProduct;
};

changeBoughtStatus(shopList, "milk");
showShopList(shopList);
