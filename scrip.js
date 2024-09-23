const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const homebtn = document.getElementById('Home')

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});




function redirectToHome() {
    window.location.href = 'index.html'; 
  }


  function redirectToProfile() {
    window.location.href = 'userprofile.html';  
  }

