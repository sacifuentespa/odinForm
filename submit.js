// variables from the buttons
const submitButton = document.querySelector('button[type="submit"]');
const resetButton = document.querySelector('button[type="reset"]');
const firstNameInput = document.querySelector('#firstName');
const inputs = document.querySelectorAll('input');



// variables from the warnings

const firstNameWarning = document.querySelector('#firstNameWarning');
const lastNameWarning = document.querySelector('#lastNameWarning');
const emailWarning = document.querySelector('#emailWarning');
const phoneWarning = document.querySelector('#phoneWarning');
const passwordWarning = document.querySelector('#passwordWarning');
const confirmationWarning = document.querySelector('#confirmWarning');

// 

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    // variables from the inputs
    const firstNameInput = document.querySelector('#firstName');
    const lastNameInput = document.querySelector('#lastName');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone');
    const passwordInput = document.querySelector('#password');
    const confirmationInput = document.querySelector('#passwordConfirmation');

    if (!firstNameInput.checkValidity()) {
        firstNameInput.classList.add('inval');
        firstNameWarning.style.display = "block";
        firstNameWarning.innerHTML = "First name should have at least 2 characters";
    }else{
        firstNameInput.classList.remove('inval');
        firstNameWarning.style.display = "none";
    }

    if (!lastNameInput.checkValidity()) {
        lastNameInput.classList.add('inval');
        lastNameWarning.style.display = "block";
        lastNameWarning.innerHTML = "Last name should have at least 2 characters";
    }else{
        lastNameInput.classList.remove('inval');
        lastNameWarning.style.display = "none";
    }

    if (!emailInput.checkValidity()) {
        emailInput.classList.add('inval');
        emailWarning.style.display = "block";
        emailWarning.innerHTML = "Please provide a valid email";
    }else{
        emailInput.classList.remove('inval');
        emailWarning.style.display = "none";
    }

    if (!phoneInput.checkValidity()) {
        phoneInput.classList.add('inval');
        phoneWarning.style.display = "block";
        phoneWarning.innerHTML = "Phone number is required";
    }else{
        phoneInput.classList.remove('inval');
        phoneWarning.style.display = "none";
    }
    if (!passwordInput.checkValidity()) {
        passwordInput.classList.add('inval');
        passwordWarning.style.display = "block";
        passwordWarning.innerHTML = "Password should have at least 10 characters";
    }
    if (!confirmationInput.checkValidity()) {
        confirmationInput.classList.add('inval');
        confirmationWarning.style.display = "block";
        confirmationWarning.innerHTML = "Password should have at least 10 characters";
    }
    if (passwordInput.checkValidity() && confirmationInput.checkValidity()) {
        if (confirmationInput.value !== passwordInput.value) {
            passwordInput.classList.add('inval');
            passwordWarning.style.display = "block";
            passwordWarning.innerHTML = "Confirmation and password don't match"
            confirmationInput.classList.add('inval');
            confirmationWarning.style.display = "block";
            confirmationWarning.innerHTML = "Confirmation and password don't match";
        }
        else{

            passwordInput.classList.remove('inval');
            passwordWarning.style.display = "none";
            confirmationInput.classList.remove('inval');
            confirmationWarning.style.display = "none";
        }
    }
})