const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const CLASSNAME_HIDDEN = "hidden";
const KEY_USERNAME = "username";

function onLoginSubmit(event) {
  event.preventDefault();

  const inputUserName = loginInput.value;
  localStorage.setItem(KEY_USERNAME, inputUserName);

  paintGreetings(inputUserName);
}

loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username) {
  loginForm.classList.add(CLASSNAME_HIDDEN);
  greeting.innerHTML = `Hello, ${username}`;
  greeting.classList.remove(CLASSNAME_HIDDEN);
}

const savedUsername = localStorage.getItem(KEY_USERNAME);
if (savedUsername !== null) {
  paintGreetings(savedUsername);
}
