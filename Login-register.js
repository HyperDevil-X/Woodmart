let isLoginVisible = false;

// Toggle between login and register form with animation
function toggleForm() {
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");

    if (isLoginVisible) {
        registerForm.style.transform = "rotateY(0deg)";
        loginForm.style.transform = "rotateY(180deg)";
        setTimeout(() => {
            registerForm.style.display = "block";
            loginForm.style.display = "none";
        }, 300);
    } else {
        registerForm.style.transform = "rotateY(-180deg)";
        loginForm.style.transform = "rotateY(0deg)";
        setTimeout(() => {
            registerForm.style.display = "none";
            loginForm.style.display = "block";
        }, 300);
    }

    isLoginVisible = !isLoginVisible;
}

// Validate email format
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Register User
function registerUser() {
    let name = document.getElementById("reg-name").value.trim();
    let email = document.getElementById("reg-email").value.trim();
    let password = document.getElementById("reg-pass").value.trim();
    let confirmPassword = document.getElementById("reg-confirm-pass").value.trim();

    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let passError = document.getElementById("pass-error");
    let confirmPassError = document.getElementById("confirm-pass-error");

    let valid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "⚠ Name is required.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    if (!isValidEmail(email)) {
        emailError.textContent = "⚠ Enter a valid email.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Password validation
    if (password.length < 6) {
        passError.textContent = "⚠ Password must be at least 6 characters.";
        valid = false;
    } else {
        passError.textContent = "";
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        confirmPassError.textContent = "⚠ Passwords do not match.";
        valid = false;
    } else {
        confirmPassError.textContent = "";
    }

    if (!valid) return;

    alert("✅ Registration Successful!");

    // Redirect to login form after alert
    setTimeout(() => {
        toggleForm();
    }, 500);
}

// Login User
function loginUser() {
    let email = document.getElementById("login-email").value.trim();
    let password = document.getElementById("login-pass").value.trim();

    let loginEmailError = document.getElementById("login-email-error");
    let loginPassError = document.getElementById("login-pass-error");

    let valid = true;

    // Email validation
    if (!isValidEmail(email)) {
        loginEmailError.textContent = "⚠ Enter a valid email.";
        valid = false;
    } else {
        loginEmailError.textContent = "";
    }

    // Password validation
    if (password.length < 6) {
        loginPassError.textContent = "⚠ Password must be at least 6 characters.";
        valid = false;
    } else {
        loginPassError.textContent = "";
    }

    if (!valid) return;

    alert("✅ Login Successful!");

    // Redirect to index.html after alert
    setTimeout(() => {
        window.location.href = "index.html";
    }, 500);
}
