const form = document.querySelector('form');
const loginErrorMsg = document.createElement('div');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const pwd = loginForm.pwd.value;
    const email = loginForm.email.value;
    const errors = getLoginFormErrors(email, pwd);

    if(errors.length > 0) {
        loginErrorMsg.innerText = errors.join(", ");
    } else if (email === 'katie' && pwd === 'b') {
        window.location.href = "profile.html";
    }
    else{
        loginErrorMsg.innerText = "Email or Password is incorrect";
    }
});

function getLoginFormErrors(email, pwd) {
    let errors = [];

    if (form.email.value === "") {
        errors.push("Email is required");
    }

    if (form.pwd.value === "") {
        errors.push("Password is required");
    }

    if(pwd !== "b") {
        errors.push("Password is incorrect");
    }

    return errors;
}

