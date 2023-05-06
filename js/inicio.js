const form = document.querySelector('form');
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const loginButton = document.querySelector("#loginButton");
const check = document.querySelector("#check");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let user= e.target[0].value;
  let pass= e.target[1].value;
  console.log(`Usuario: ${user} Pass: ${pass}`);
});

function validarUsuario() {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  
  const userR = JSON.parse(localStorage.getItem("userR"));


  if (username === userR.usernameR && password === userR.passwordR) {
    
    window.location.href = './pages/cotizador.html';
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Usuario o contraseña incorrectos',
    });
  }
}

document.querySelector('#loginButton').addEventListener("click", validarUsuario);

//localstorage

function guardar(valor) {
  let user = { usuario: username.value, pass: password.value };

  if (user.usuario === "" || user.pass === "") {
    Swal.fire({
      icon: 'error',
      text: 'Todos los campos son requeridos',
    })
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

