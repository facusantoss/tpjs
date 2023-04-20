const form = document.querySelector('form');
const username = document.querySelector("#username");
const password = document.querySelector("#password");

form.addEventListener("submit", e => {
  e.preventDefault();
});

const loginButton = document.getElementById("#loginButton");

loginButton.addEventListener("click", () => {
  window.location.href = "cotizador.html";
});