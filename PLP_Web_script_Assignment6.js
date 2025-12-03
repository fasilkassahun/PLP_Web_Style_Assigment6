/* -------------------------------
PART 1: Interactive Greeting
---------------------------------*/
const greetBtn = document.getElementById("greet-btn");
const greetOutput = document.getElementById("greet-output");

greetBtn.addEventListener("click", function() {
    const name = document.getElementById("name-input").value.trim();
    if(name) {
        greetOutput.textContent = "Hello, " + name + "! Welcome to the site.";
    } else {
        greetOutput.textContent = "Please enter your name first.";
    }
});

/* -------------------------------
PART 2: Counter Feature
---------------------------------*/
let count = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("increment-btn").addEventListener("click", function() {
    count++;
    counterDisplay.textContent = count;
});

document.getElementById("decrement-btn").addEventListener("click", function() {
    count--;
    counterDisplay.textContent = count;
});

/* -------------------------------
PART 3: Custom Form Validation
---------------------------------*/
const form = document.getElementById("registration-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Get form values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation logic
    if(username.length < 3) {
        formMessage.textContent = "Username must be at least 3 characters long.";
        formMessage.style.color = "red";
        return;
    }

    if(!email.includes("@") || !email.includes(".")) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    if(password.length < 6) {
        formMessage.textContent = "Password must be at least 6 characters long.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";

    
    form.reset();
});

/* -------------------------------
PART 4: Additional DOM Interaction Example
---------------------------------*/
// Highlight input on focus
const inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    input.addEventListener("focus", function() {
        this.style.borderColor = "#003366";
        this.style.backgroundColor = "#eef3f9";
    });
    input.addEventListener("blur", function() {
        this.style.borderColor = "#ccc";
        this.style.backgroundColor = "#fff";
    });
});
