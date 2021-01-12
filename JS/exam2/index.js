// Задача: Cделать TODO list на чистом JS

// Требования:
// - в HTML только 1 див id="root" все остальное сгенерировать
// - возможность добавлять задачи в список
// - возможность удалять задачи из списка
// - (доп) возможность редактировать задачи
// - (доп) возможность удалять несколько задач
// - (доп) следить за прогрессом (выполнено х из у)
// - (доп) возможность сохранить данные при перезагрузке
//  страницы (использовать хранилище)

const root = document.getElementById("root");

const todoList = document.createElement("div");
todoList.className = "todolist container";

todoList.innerHTML = `
    <h2 class="todolist__title">todolist</h2>
    <form class="form">
      <input class="input" type="text" placeholder="what needs to be done?" name="text">
      <button class="button add" type="submit">+</button>
    </form>
    <ul class="value__list"></ul>
    <footer class="footer">
      <div class="progress">
      <div class="completed">
        <p class="completed__text"> 0 of 0 tasks done</p>
      </div>
      </div>
      <button class="button tasks-done">
        Remove checked &#10005;
      </button>
    </footer>
    `;

root.append(todoList);

const form = document.querySelector("form");
const inputValue = document.querySelector(".input");

// =============

let todoItems = [];

class Item {
  constructor(text) {
    this.text = text;
  }

  addTodo(text) {
    const todo = {
      text,
      checked: false,
      id: Date.now(),
    };

    todoItems.push(todo);
    this.createItem(todo);
  }

  createItem(todo) {
    const list = document.querySelector(".value__list");
    const isChecked = todo.checked ? "done" : "";
    const li = document.createElement("li");
    li.setAttribute("class", `value__item${isChecked}`);
    li.setAttribute("data-key", todo.id);
    li.innerHTML = `
      <input class="tick" id="${todo.id}" type="checkbox"/>
      <label for="${todo.id}"></label>
      <span class="text">${todo.text}</span>
      <input type="text" class="change__input none">
      <div class="group-button">
      <button class="btn change-item">&#9998;</button>
      <button class="btn delete-item">&#10005;</button>
      </div>
    `;

    list.append(li);
  }

  renderTodo(todo) {
    const list = document.querySelector(".value__list");
    const item = document.querySelector(`[data-key='${todo.id}']`);

    const isChecked = todo.checked ? "done" : "";
    const li = document.createElement("li");
    li.setAttribute("class", `value__item${isChecked}`);
    li.setAttribute("data-key", todo.id);
    li.innerHTML = `
      <input class="tick" id="${todo.id}" type="checkbox"/>
      <label for="${todo.id}"></label>
      <span class="text">${todo.text}</span>
      <input type="text" class="change__input none">
      <div class="group-button">
      <button class="btn change-item">&#9998;</button>
      <button class="btn delete-item">&#10005;</button>
      </div>
    `;

    if (todo.deleted) {
      item.remove();
      return;
    }

    if (item) {
      list.replaceChild(li, item);
      todoItems = todoItems.map((elem) => {
        return todo.id === elem.id ? todo : elem;
      });
    } else {
      list.append(li);
    }
  }

  changeInput(key) {
    const index = todoItems.findIndex((item) => item.id === Number(key));
    const elem = document.querySelectorAll(".value__item")[index];
    const value = document.querySelectorAll(".text")[index];
    const editInput = document.querySelectorAll(".change__input")[index];
    const containsClass = elem.classList.contains("editMode");

    if (containsClass) {
      value.innerText = editInput.value;

      const todo = {
        ...todoItems[index],
        text: editInput.value,
      };
      this.renderTodo(todo);
    } else {
      editInput.value = value.innerText;
    }

    elem.classList.toggle("editMode");
  }

  deleteInput(key) {
    const index = todoItems.findIndex((item) => item.id === Number(key));

    const todo = {
      deleted: true,
      ...todoItems[index],
    };
    todoItems = todoItems.filter((item) => item.id !== Number(key));
    this.renderTodo(todo);
  }

  deleteMultipleItems(keys) {
    todoItems = todoItems.filter((todo) => {
      if (todo.checked) {
        this.deleteInput(todo.id);
      } 
    });
  }

  toggleDone(key) {
    const index = todoItems.findIndex((item) => item.id === Number(key));
    todoItems[index].checked = !todoItems[index].checked;
    const text = document.querySelectorAll(".text")[index];

    const activeCheck = todoItems.filter((todo) => todo.checked);

    this.progress(activeCheck.length);

    text.classList.toggle("line-through");
  }

  progress(length) {
    const progress = document.querySelector(".completed__text");
    const completed = document.querySelector(".completed");
    const completedWidth = (length / todoItems.length) * 100;

    if (length !== 0) {
      completed.style.backgroundColor = "#f9ed48";
      completed.style.width = `${completedWidth}%`;
    } else {
      completed.style.backgroundColor = "inherit";
      completed.style.width = "100%";
    }
    progress.textContent = `${length} of ${todoItems.length} tasks done`;
  }
}

const newItem = new Item();

function check(e) {
  e.preventDefault();

  if (e.target.classList.contains("add")) {
    const footer = document.querySelector(".footer");

    if (inputValue.value !== "") {
      newItem.addTodo(inputValue.value);
      inputValue.value = "";
      footer.style.display = "flex";
    }
  }

  if (
    e.target.classList.contains("delete-item") &&
    e.target.nodeName === "BUTTON"
  ) {
    const itemKey = e.target.parentNode.parentNode.dataset.key;
    newItem.deleteInput(itemKey);
  }

  if (
    e.target.classList.contains("change-item") &&
    e.target.nodeName === "BUTTON"
  ) {
    const itemKey = e.target.parentNode.parentNode.dataset.key;
    newItem.changeInput(itemKey);
  }

  if (e.target.classList.contains("tick") && e.target.nodeName === "INPUT") {
    const itemKey = e.target.parentNode.dataset.key;
    newItem.toggleDone(itemKey);
  }

  if (e.target.classList.contains("tasks-done")) {
    newItem.deleteMultipleItems();
  }
}

todoList.addEventListener("click", check);
