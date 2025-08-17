// ====================
// Part 1: Event Handling
// ====================

const clickBtn = document.getElementById('clickBtn');
const clickMessage = document.getElementById('clickMessage');

clickBtn.addEventListener('click', () => {
    clickMessage.textContent = "Button clicked! 🎉";
});

// ====================
// Part 2: Interactive Elements
// ====================

// Light/Dark Mode Toggle
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

// Counter Game
let counter = 0;
const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');

incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.textContent = counter;
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    counterValue.textContent = counter;
});

// ====================
// Part 3: Form Validation
// ====================

const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    let valid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Enter a valid email.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Password validation
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    // Show success message if all valid
    if (valid) {
        formMessage.textContent = "Form submitted successfully! ✅";
        form.reset();
    } else {
        formMessage.textContent = "";
    }
});
