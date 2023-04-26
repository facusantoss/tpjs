const form = document.querySelector('form');
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const loginButton = document.querySelector("#loginButton");
const check = document.querySelector("#check");
 const message = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let user= e.target[0].value;
  let pass= e.target[1].value;
  console.log(`Usuario: ${user} Pass: ${pass}`);
});

//localstorage

function guardar(valor) {
  let user = { usuario: username.value, pass: password.value };

  if (user.usuario === "" || user.pass === "") {
    message.innerHTML = ("Error todos los campos requeridos");
    return;
  } else {
    if (valor === "sessionStorage") {
      sessionStorage.setItem("item", JSON.stringify(user));
    }
    if (valor === "localStorage") {
      localStorage.setItem("item", JSON.stringify(user));
    }
  }
  return user;
}

function recuperarDatos(datos) {
  if (datos) {
    username.value = datos.usuario;
    password.value = datos.pass;
  }
}

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  check.checked ? guardar("localStorage") : guardar("sessionStorage");
});

