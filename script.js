/*-------------------- WELCOME MESSAGE --------------------*/
function startTransition() {
    document.body.classList.add("fade-out");
    setTimeout(function() {
        window.location.href = "login-register.html";
    }, 1000);   // 1 second
}

/*-------------------- LOGIN-REGISTER --------------------*/
// Show and hide forms
function showSignIn() {
    document.getElementById("signup-container").classList.add("hidden");
    document.getElementById("signin-container").classList.remove("hidden");
}

function showSignUp() {
    document.getElementById("signin-container").classList.add("hidden");
    document.getElementById("signup-container").classList.remove("hidden");
}


// Sign Up
function signUp() {
    const name = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value.trim();

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (localStorage.getItem(email)) {
        alert("Username already exists! Try signing in.");
        return;
    }

    // Save user info
    const userData = {
        name: name,
        password: password
    };

    localStorage.setItem(email, JSON.stringify(userData));
    alert("Account created successfully!");
    showSignIn();
}


// Sign In
function signIn() {
    const email = document.getElementById("signin-email").value.trim();
    const password = document.getElementById("signin-password").value.trim();
    const storedData = localStorage.getItem(email);

    if (!storedData) {
        alert("Account not found. Please sign up first.");
        return;
    }
    
    const userData = JSON.parse(storedData);

    if (userData.password !== password) {
        alert("Incorrect password!");
        return;
    }
}
function signIn() {
    document.body.classList.add("fade-out");
    setTimeout(function() {
        window.location.href = "home-page.html";
    }, 1000);   // 1 second
}

/*-------------------- USER-LOGOUT --------------------*/
const userIcon = document.getElementById("userIcon");
const dropdownMenu = document.getElementById("dropdownMenu");
const logoutBtn = document.getElementById("logputBtn");

//toggle dropdown kapag pinindot yung user icon
userIcon.addEventListener("click", () => {
    dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
});

//logout action
logoutBtn.addEventListener("click", () => {
    window.location.href = "welcome-message.html";
});