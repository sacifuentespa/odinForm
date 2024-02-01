// variables from the buttons
const submitButton = document.querySelector('button[type="submit"]');
const resetButton = document.querySelector('button[type="reset"]');

//variables for the inputs;
const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');

// variables from the warnings

const firstNameWarning = document.querySelector('#firstNameWarning');
const lastNameWarning = document.querySelector('#lastNameWarning');
const emailWarning = document.querySelector('#emailWarning');
const phoneWarning = document.querySelector('#phoneWarning');
const passwordWarning = document.querySelector('#passwordWarning');
const confirmationWarning = document.querySelector('#confirmWarning');

// Events for form validations

const inputValidation = function (input, warning, errorMessage) {
    if (!input.checkValidity()) {
        input.classList.add('inval');
        warning.style.display = "block";
        warning.innerHTML = errorMessage;
        return false;
    } else {
        input.classList.remove('inval');
        warning.style.display = "none";
        return true;
    }
}

firstNameInput.addEventListener("blur", () => inputValidation(firstNameInput, firstNameWarning, "Should have at least 2 characters"));

lastNameInput.addEventListener("blur", () => inputValidation(lastNameInput, lastNameWarning, "Should have at least 2 characters"));

emailInput.addEventListener("blur", () => inputValidation(emailInput, emailWarning, "Please provide a valid email"));


phoneInput.addEventListener("blur", () => inputValidation(phoneInput, phoneWarning, "Phone number is required"))

const passwordValidation = function () {
    const validatePassword = function(passwordInput, confirmationInput){
        if(passwordInput.value.length<10){
            inputValidation(passwordInput, passwordWarning, "Should have at least 10 characters")
            return false
        }
        if (passwordInput.value !== confirmationInput.value) {
            // Display an error message or take appropriate action
            passwordWarning.style.display = "block";
            passwordWarning.innerHTML = "Confirmation and password don't match";
            passwordInput.classList.add('inval');
            confirmationInput.classList.add('inval');
            confirmationWarning.style.display = "block";
            confirmationWarning.innerHTML = "Confirmation and password don't match";
            return false;
        }else{
            passwordWarning.style.display = "none";
            passwordWarning.innerHTML = "";
            confirmationWarning.style.display = "none";
            confirmationWarning.innerHTML = "";
            passwordInput.classList.remove('inval');
            confirmationInput.classList.remove('inval');
            inputValidation(passwordInput, passwordWarning, "")
        }

        
        // If validation passes, you can update the UI or take further action
        console.log("Password validated")
        return true;
    }

    const passwordInput = document.getElementById('password');
    const confirmationInput = document.getElementById('passwordConfirmation');

    passwordInput.addEventListener("blur", () => {
        validatePassword(passwordInput, confirmationInput);
    });

    confirmationInput.addEventListener("blur", () => {
        validatePassword(passwordInput, confirmationInput);
    });

    return validatePassword;
}

passwordValidation();


submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    // variables from the inputs

    inputValidation(firstNameInput, firstNameWarning, "Should have at least 2 characters");
    inputValidation(lastNameInput, lastNameWarning, "Should have at least 2 characters");
    inputValidation(emailInput, emailWarning, "Please provide a valid email");
    inputValidation(phoneInput, phoneWarning, "Phone number is required");
    passwordValidation();

})