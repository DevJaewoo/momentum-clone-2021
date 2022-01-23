const todoMain = document.querySelector(".todo__main");
const todoForm = document.querySelector(".todo__form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo__list");
const todoButton = document.querySelector(".todo__button");

let todos = [];

const KEY_TODOS = "todos";

function onTodoToggle(event) {
  event.preventDefault();
  todoMain.classList.toggle("hidden");
}

todoButton.addEventListener("click", onTodoToggle);

function saveToDo() {
  localStorage.setItem(KEY_TODOS, JSON.stringify(todos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  todos = todos.filter((element) => element.id !== parseInt(li.id));

  li.remove();
  saveToDo();
}

function insertToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const input = document.createElement("input");
  input.type = "checkbox";
  li.appendChild(input);

  const span = document.createElement("span");
  span.innerText = newTodo.text;
  li.appendChild(span);

  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", deleteToDo);
  li.appendChild(button);

  todoList.appendChild(li);
}

function onToDoSubmit(event) {
  event.preventDefault();

  const newTodo = {
    id: Date.now(),
    text: todoInput.value,
  };

  todoInput.value = "";

  insertToDo(newTodo);
  todos.push(newTodo);
  saveToDo();
}

const savedTodos = localStorage.getItem(KEY_TODOS);

if (savedTodos !== null) {
  todos = JSON.parse(savedTodos);
  todos.forEach(insertToDo);
}

todoForm.addEventListener("submit", onToDoSubmit);
