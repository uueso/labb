
document.getElementById("signup-btn").addEventListener("click", function() {

    window.location.href = "signup.html";
});


const headerBurger = document.getElementById('nav-toggle');

headerBurger.addEventListener('click', () => {
  headerBurger.classList.toggle('active');
});

const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
