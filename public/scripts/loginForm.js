// DOM SELECTORS
const guestName = document.querySelector("#guest-name");
const profileLogoutBtn = document.querySelector("#profile-logout-btn");
const profileOpenBtn = document.querySelector("#profile-open-btn");
const profileCloseBtn = document.querySelector("#profile-close-btn");
const profileLoginBtn = document.querySelector("#profile-login-btn");
const profileNameInput = document.querySelector("#profile-name-input");
const profileEmailInput = document.querySelector("#profile-email-input");
const profilePasswordInput = document.querySelector("#profile-password-input");
const loginDialog = document.querySelector("#login-dialog");
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");

// INITIAL STATE: show saved user name
const savedUser = JSON.parse(localStorage.getItem("user"));

if (savedUser) {
    guestName.textContent = savedUser.name;
}

// OPEN PROFILE DIALOG
profileOpenBtn.addEventListener("click", () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser) {
        profileNameInput.value = savedUser.name;
        profileEmailInput.value = savedUser.email;
        profilePasswordInput.value = savedUser.password;
        profileLoginBtn.textContent = "Save Changes";
        profileLogoutBtn.style.display = "block";
    } else {
        profileNameInput.value = "";
        profileEmailInput.value = "";
        profilePasswordInput.value = "";
        profileLoginBtn.textContent = "Login";
        profileLogoutBtn.style.display = "none";
    }

    clearLoginErrors();
    loginDialog.showModal();
});

profileCloseBtn.addEventListener("click", () => loginDialog.close());

// LOGOUT
profileLogoutBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    guestName.textContent = "Guest.";
    profileNameInput.value = "";
    profileEmailInput.value = "";
    profilePasswordInput.value = "";
    clearLoginErrors();
    profileLoginBtn.textContent = "Login";
    profileLogoutBtn.style.display = "none";
    showSuccessMessage("Logout successful!");
});

// LOGIN / SAVE CHANGES
profileLoginBtn.addEventListener("click", () => {
    const name = profileNameInput.value.trim();
    const email = profileEmailInput.value.trim();
    const password = profilePasswordInput.value.trim();

    clearLoginErrors();

    let isValid = true;

    if (!name) {
        nameError.textContent = "⚠ Please enter your name";
        profileNameInput.classList.add("input-invalid");
        isValid = false;
    }

    if (!email) {
        emailError.textContent = "⚠ Please enter your email address";
        profileEmailInput.classList.add("input-invalid");
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "⚠ Please enter a valid email address";
        profileEmailInput.classList.add("input-invalid");
        isValid = false;
    }

    if (!password) {
        passwordError.textContent = "⚠ Please enter your password";
        profilePasswordInput.classList.add("input-invalid");
        isValid = false;
    } else if (password.length < 8) {
        passwordError.textContent = "⚠ Password must be at least 8 characters long";
        profilePasswordInput.classList.add("input-invalid");
        isValid = false;
    }

    if (!isValid) return;

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    guestName.textContent = name;

    if (profileLoginBtn.textContent === "Save Changes") {
        showSuccessMessage("Profile updated successfully!");
    } else {
        showSuccessMessage("Login successful!");
    }

    loginDialog.close();
});

// CLEAR VALIDATION ERRORS
const clearLoginErrors = () => {
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    profileNameInput.classList.remove("input-invalid");
    profileEmailInput.classList.remove("input-invalid");
    profilePasswordInput.classList.remove("input-invalid");
}
