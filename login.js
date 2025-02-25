
const loginForm = document.getElementById('loginForm');
const loginButton = document.getElementById('loginBtn');
const loginErrorMsg = document.getElementById('loginErrorMsg');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.pwd.value;

    if (email === "katie@" && password === "b") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})