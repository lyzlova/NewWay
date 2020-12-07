// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива
// состоит из названия товара, количества и цены за единицу товара.
// Написать следующие функции:

const products = [
  { name: "bread", amount: 1, price: 12 },
  { name: "chocolate", amount: 6, price: 45 },
  { name: "milk", amount: 2, price: 31 },
];

const productsList = document.createElement("ul");
productsList.style.marginBottom = "20px";
root.insertAdjacentElement("afterbegin", productsList);


// 1. Распечатка чека на экран;
const showShopList = (
  products,
  expensiveProduct,
  totalPurchase,
  averageTotal
) => {
  const expensiveText = "Cамая дорогая покупка в чеке";
  const purchaseText = "Общая сумма покупки";
  const averageTotalText = "Средняя стоимость одного товара в чеке";

  for (const obj of products) {
    const item = document.createElement("li");
    item.innerText = `name: ${obj.name}, amount: ${obj.amount}, price: ${obj.price}`;
    productsList.append(item);
  }

  const shopTitle = document.createElement("div");
  const shopTextExpensive = document.createElement("p");
  shopTextExpensive.textContent = `${expensiveText}: ${expensiveProduct.name}`;

  const shopTextPurchase = document.createElement("p");
  shopTextPurchase.textContent = `${purchaseText}: ${totalPurchase}`;

  const shopTextAverage = document.createElement("p");
  shopTextAverage.textContent = `${averageTotalText}: ${averageTotal}`;

  shopTitle.append(shopTextExpensive, shopTextPurchase, shopTextAverage);

  productsList.insertAdjacentElement("afterend", shopTitle);
};

//  2. Получение самой дорогой покупки в чеке;

const getExpensiveProduct = (products) => {
  return products.reduce((acc, obj) => (acc.price > obj.price ? acc : obj), {});
};

const expensiveProduct = getExpensiveProduct(products);

// 3. Подсчет общей суммы покупки;

const getTotalPurchase = (products) => {
  return products.reduce((acc, obj) => (acc += obj.amount * obj.price), 0);
};

const totalPurchase = getTotalPurchase(products);

// 4. Подсчет средней стоимости одного товара в чеке.

const getAverageTotal = (total, products) => {
  const totalAmount = products.reduce((acc, obj) => (acc += obj.amount), 0);
  return Number((total / totalAmount).toFixed(2));
};

const averageTotal = getAverageTotal(totalPurchase, products);

showShopList(products, expensiveProduct, totalPurchase, averageTotal);
