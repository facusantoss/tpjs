const formR = document.querySelector('#form-register');
const usernameR = document.querySelector("#usernameR");
const passwordR = document.querySelector("#passwordR");
const mail = document.querySelector("#email");
const regisButton = document.querySelector("#regisButton");
const loginLink = document.querySelector("#login-link");



regisButton.addEventListener('click', (e) => {
  e.preventDefault();
  
  const userR = {
    usernameR: usernameR.value,
    mail: mail.value,
    passwordR: passwordR.value
  };
  
  localStorage.setItem('userR', JSON.stringify(userR));

  Swal.fire({
    icon: 'success',
    title: 'Te registrastre exitosamente',
  })
});
