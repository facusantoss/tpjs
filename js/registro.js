const formR = document.querySelector('#form-register');
const usernameR = document.querySelector("#usernameR");
const passwordR = document.querySelector("#passwordR");
const mail = document.querySelector("#email");
const regisButton = document.querySelector("#regisButton");

const loginLink = document.querySelector("#login-link");

/*formR.addEventListener("submit", (e) => {
  e.preventDefault();
  let userR= e.target[0].value;
  let mailR= e.target[1].value;
  let passR= e.target[2].value;
  console.log(`Usuario: ${userR} Pass: ${passR} Mail: ${mailR} `);
});*/

regisButton.addEventListener('click', (e) => {
  e.preventDefault();
  
  const userR = {
    usernameR: usernameR.value,
    mail: mail.value,
    passwordR: passwordR.value
  };
  
  localStorage.setItem('userR', JSON.stringify(userR));
});

