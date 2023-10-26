
const passwordInput = document.getElementById("password");
const showPasswordImg = document.querySelector(".show-password-icon");

let showPassword = false; 

showPasswordImg.addEventListener("mousedown", function() {
    showPassword = true;
    passwordInput.type = "text";
});

document.addEventListener("mouseup", function() {
    if(showPassword) {
        setTimeout(function(){
            passwordInput.type = "password";
            showPassword = false;
        }, 100); 
    }
});


const emailInput = document.getElementById("email");
const addAtIcon = document.querySelector(".add-at-icon");

addAtIcon.addEventListener("click", function() {
    emailInput.value += "@";
});


const signupButton = document.querySelector(".signup-btn");

signupButton.addEventListener("click", function() {
    const loginInput = document.getElementById("login");
    const emailInput = document.getElementById("name");
    const passwordInput = document.getElementById("password");

    if (!loginInput.value) {
        loginInput.style.borderBottomColor = "red";
    } else {
        loginInput.style.borderBottomColor = "";
    }

    if (!emailInput.value) {
        emailInput.style.borderBottomColor = "red";
    } else {
        emailInput.style.borderBottomColor = "";
    }

    if (!passwordInput.value) {
        passwordInput.style.borderBottomColor = "red";
    } else {
        passwordInput.style.borderBottomColor = "";
    }

    if (loginInput.value && emailInput.value && passwordInput.value) {
        window.location.href = "index.html"; 
    }
});

