const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#inputName");
const welcome = document.querySelector("#welcome");
const loginedStatus = document.querySelector("#loginedStatus");
const leftDiv = document.querySelector("#leftDiv");
const rightDiv = document.querySelector("#rightDiv");
const logoutBtn = document.querySelector("#logoutBtn");

const CLASS_HIDDEN = "hidden";

function onSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginInput.value = "";
  localStorage.setItem("username", userName);
  pageTurning(userName);
}

const savedUserName = localStorage.getItem("username");

function pageTurning(userName) {
  leftDiv.classList.remove(CLASS_HIDDEN);
  rightDiv.classList.remove(CLASS_HIDDEN);
  logoutBtn.classList.remove(CLASS_HIDDEN);
  loginForm.classList.add(CLASS_HIDDEN);
  welcome.classList.add(CLASS_HIDDEN);
  loginedStatus.innerText = `Hello, ${userName}`;
}

if (savedUserName === null) {
  loginForm.classList.remove(CLASS_HIDDEN);
  loginForm.addEventListener("submit", onSubmit);
} else {
  pageTurning(savedUserName);
}

function logOut() {
  localStorage.removeItem("username");
  leftDiv.classList.add(CLASS_HIDDEN);
  rightDiv.classList.add(CLASS_HIDDEN);
  logoutBtn.classList.add(CLASS_HIDDEN);
  welcome.classList.remove(CLASS_HIDDEN);
  loginForm.classList.remove(CLASS_HIDDEN);
}

logoutBtn.addEventListener("click", logOut);
