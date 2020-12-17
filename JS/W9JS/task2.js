import data from "./data.js";

// 2. Создать HTML-страницу с большой таблицей. При клике по
// заголовку колонки, необходимо отсортировать данные по этой
// колонке. Учтите, что числовые значения должны сортироваться
// как числа, а не как строки.

const root = document.getElementById("root");
const table = document.createElement("table");
table.className = "table";


// ---------------
const newTable = createTable("Id", "Amount", "Account");

function createTable(id, amount, account) {
  return `
      <thead>
        <tr>
          <th>${id}</th>
          <th>${amount}</th>
          <th>${account}</th>
        </tr>
      </thead>
  `;
}

// -------------
const markup = createTableRows(data);

function createTableRows(data) {
  console.log(data);
  return data.map((obj) => createTableRowMarkup(obj)).join("");
}

function createTableRowMarkup({ id, amount, account }) {
  const row = `
  <tr>
    <td>${id}</td>
    <td>${amount}</td>
    <td>${account}</td>
  </tr>
  `;

  return row;
}

// -------------------

function sortTableRows(data, elem) {
  const sortElem = data.sort((prev, next) => next[elem] - prev[elem]);
  return createTableRows(sortElem);
}

function handleSort(e) {
  let eventElement = e.target.innerHTML.toLowerCase();
  if (e.target.nodeName === "TH") {
    sortTableRows(data, eventElement);
  }
}

table.addEventListener("click", handleSort);

table.insertAdjacentHTML("beforeend", newTable);
table.insertAdjacentHTML("beforeend", markup);
root.append(table);
