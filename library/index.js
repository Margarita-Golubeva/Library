document.addEventListener("DOMContentLoaded", function() {

// profile

const headerLog = document.querySelector('.header-log');
const profileBeforeRegistration = document.querySelector('.profile-before-registration');

headerLog.addEventListener('click', () => {
    toggleProfileCard(profileBeforeRegistration);
    closeBurgerMenu();
    event.stopPropagation(); // Prevent the click from propagating further
});

// Close profile card when clicking outside of it
document.addEventListener('click', (event) => {
    if (!profileBeforeRegistration.contains(event.target)) {
        profileBeforeRegistration.classList.remove('active');
    }
});

// Function to toggle active class and display profile card
function toggleProfileCard(profileCard) {
    profileCard.classList.toggle('active');
}

// Close profile card on header click
document.querySelector('header').addEventListener('click', () => {
    profileBeforeRegistration.classList.remove('active');
});

// Close profile card on body click
document.body.addEventListener('click', () => {
    profileBeforeRegistration.classList.remove('active');
});

// Close burger menu
function closeBurgerMenu() {
    document.querySelector(".header").classList.remove("open");
}

// Toggle burger menu
document.getElementById("burger").addEventListener("click", function() {
    document.querySelector(".header").classList.toggle("open");
});

// Prevent closing burger menu when clicking within the menu
document.getElementById("nav-menu").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});

document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});

// Close burger menu when clicking outside of it
document.body.addEventListener('click', event => {
    if (!event._isClickWithInMenu) {
        closeBurgerMenu();
    }
});

// Log In Modal

    const popup = document.querySelector('.popup');
    const loginLink = document.getElementById('login-link');
    const loginFromLibCard = document.getElementById('login-from-lib-card');
    const loginModal = document.querySelector('.login-modal');
    const closeButton = document.getElementById('login-close-btn');
    const loginForm = document.querySelector('.login-form');
    const logInButton = document.getElementById('log-in-btn');

    // Open the modal when clicking on the login link
    loginLink.addEventListener('click', (event) => {
        event.preventDefault();
        popup.classList.add('shown');
        loginModal.classList.add('showed');
        document.body.style.overflow = 'hidden';
    });

    loginFromLibCard.addEventListener('click', (event) => {
        event.preventDefault();
        popup.classList.add('shown');
        loginModal.classList.add('showed');
        document.body.style.overflow = 'hidden';
    });

    const buyButtons = document.querySelectorAll('.buy-button');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            popup.classList.add('shown');
            loginModal.classList.add('showed');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close the modal when clicking the close button
    closeButton.addEventListener('click', () => {
        closeLoginModal();
    });

    // Close the modal when clicking outside the modal
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            closeLoginModal();
        }
    });

    // Close the modal when submitting the login form
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Here code to check localStorage for email/card and password
        closeLoginModal();
    });

    // Function to close the login modal
    function closeLoginModal() {
        popup.classList.remove('shown');
        loginModal.classList.remove('showed');
        document.body.style.overflow = 'auto';
    }

    function closeLoginModal() {
    const emailInput = document.getElementById('login-user-name');
    const passwordInput = document.getElementById('login-password');

    // Clear the input fields
    emailInput.value = '';
    passwordInput.value = '';

    popup.classList.remove('shown');
    loginModal.classList.remove('showed');
    document.body.style.overflow = 'auto';
    }

// register modal

const registerLink = document.getElementById('register-link');
const registerModal = document.querySelector('.login-register');
const registerFromLibCard = document.getElementById('register-from-lib-card');
const regCloseButton = document.getElementById('reg-close-btn');
const linkToLogin = document.getElementById('move-to-login');
const linkToReg = document.getElementById('link-to-register');

// open modal window

registerLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the link from navigating
    popup.classList.add('shown');
    loginModal.classList.remove('showed');
    registerModal.classList.add('show');
    document.body.style.overflow = 'hidden';
});


registerFromLibCard.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the link from navigating
    popup.classList.add('shown');
    loginModal.classList.remove('showed');
    registerModal.classList.add('show');
    document.body.style.overflow = 'hidden';
});

// Open the login modal when clicking on the move-to-login
    linkToLogin.addEventListener('click', (event) => {
        event.preventDefault();
        popup.classList.add('shown');
        registerModal.classList.remove('show');
        loginModal.classList.add('showed');
        document.body.style.overflow = 'hidden';
    });

    
//Open register modal when clicking on the sign-up-btn
linkToReg.addEventListener('click', (event) => {
    event.preventDefault();
    popup.classList.add('shown');
    loginModal.classList.remove('showed');
    registerModal.classList.add('show');
    document.body.style.overflow = 'hidden';
});

    // Close the modal when clicking the close button
    regCloseButton.addEventListener('click', () => {
        closeLoginModal();
    });

// close modal

    function closeLoginModal() {
        popup.classList.remove('shown');
        registerModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    function closeLoginModal() {
    const passwordInput = document.getElementById('login-password');

    const registerUserName = document.getElementById('register-user-name');
    const registerUserLastName = document.getElementById('register-user-last-name');
    const registerEmail = document.getElementById('register-email');
    const registerPassword = document.getElementById('register-password');


    // Clear the input fields
    registerUserName.value = '';
    registerUserLastName.value = '';
    registerEmail.value = '';
    registerPassword.value = '';


    popup.classList.remove('shown');
    registerModal.classList.remove('show');
    document.body.style.overflow = 'auto';
    }

// registration validation

const firstNameInput = document.getElementById('register-user-name');
const lastNameInput = document.getElementById('register-user-last-name');
const emailInput = document.getElementById('register-email');
const passwordInput = document.getElementById('register-password');
const signUpButton = document.getElementById('sign-up-btn');
const nameRegex = /^[A-Za-z]+$/;
const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,4}$/;

const loginUserName = document.getElementById('login-user-name');
const loginPassword = document.getElementById('login-password');

function showValidationHint(inputElement, message) {
    inputElement.setCustomValidity(message);
    inputElement.reportValidity();
}

function clearValidationHint(inputElement) {
    inputElement.setCustomValidity('');
}

firstNameInput.addEventListener('input', () => {
    if (!nameRegex.test(firstNameInput.value)) {
        showValidationHint(firstNameInput, 'Please enter your first name.');
    } else {
        clearValidationHint(firstNameInput);
    }
});

lastNameInput.addEventListener('input', () => {
    if (!nameRegex.test(lastNameInput.value)) {
        showValidationHint(lastNameInput, 'Please enter your last name.');
    } else {
        clearValidationHint(lastNameInput);
    }
});

emailInput.addEventListener('input', () => {
    if (!emailRegex.test(emailInput.value)) {
        showValidationHint(emailInput, 'Please enter your email.');
    } else {
        clearValidationHint(emailInput);
    }
});

passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 8) {
        showValidationHint(passwordInput, 'Your password must be at least 8 characters.');
    } else {
        clearValidationHint(passwordInput);
    }
});

signUpButton.addEventListener('click', () => {
    if (!passwordInput.checkValidity()) {
        event.preventDefault();
        showValidationHint(passwordInput, 'Your password must be at least 8 characters.');
    } else {
        passwordInput.style.backgroundColor = '#fff';
    }

    if (!emailInput.checkValidity()) {
        event.preventDefault();
        showValidationHint(emailInput, 'Please enter your email.');
    } else {
        emailInput.style.backgroundColor = '#fff';
    }

    if (!lastNameInput.checkValidity()) {
        event.preventDefault();
        showValidationHint(lastNameInput, 'Please enter your last name.');
    } else {
        lastNameInput.style.backgroundColor = '#fff';
    }
    
    if (!firstNameInput.checkValidity()) {
        event.preventDefault();
        showValidationHint(firstNameInput, 'Please enter your first name.');
    } else {
        firstNameInput.style.backgroundColor = '#fff';
    }
});

loginUserName.addEventListener('input', () => {
    if (!emailRegex.test(loginUserName.value)) {
        showValidationHint(loginUserName, 'Please enter your email.');
    } else {
        clearValidationHint(loginUserName);
    }
});

loginPassword.addEventListener('input', () => {
    if (loginPassword.value.length < 8) {
        showValidationHint(loginPassword, 'Your password must be at least 8 characters.');
    } else {
        clearValidationHint(loginPassword);
    }
});

logInButton.addEventListener('click', () => {
    if (!loginPassword.checkValidity()) {
        event.preventDefault();
        showValidationHint(loginPassword, 'Your password must be at least 8 characters.');
    } else {
        loginPassword.style.backgroundColor = '#fff';
    }
    
    if (!loginUserName.checkValidity()) {
        event.preventDefault();
        showValidationHint(loginUserName, 'Please enter your email.');
    } else {
        loginUserName.style.backgroundColor = '#fff';
    }
});

// USERS

class User {
    constructor(firstName, lastName, email, password, cardNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.cardNumber = cardNumber;
    }
};

function generateCardNumber() {
    const hexChars = '0123456789ABCDEF';
    let hexNumber = '';
    for (let i = 0; i < 9; i++) {
        const randomIndex = Math.floor(Math.random() * hexChars.length);
        hexNumber += hexChars.charAt(randomIndex);
    }
    return hexNumber;
};


// check if the user is registered

function checkLoggedIn() {
    const registeredUser = localStorage.getItem('loggedInUser');
    return registeredUser ? JSON.parse(registeredUser) : null;
}

// Check if the user is already logged in

function checkLoggedIn() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    return loggedInUser ? JSON.parse(loggedInUser) : null;
}

function registerUser(firstName, lastName, email, password) {
    const cardNumber = generateCardNumber().toUpperCase();
    const newUser = new User(firstName, lastName, email, password, cardNumber);
    localStorage.setItem(cardNumber, JSON.stringify(newUser));
    localStorage.setItem('loggedInUser', JSON.stringify(newUser));
}

const profileAfterRegistration = document.querySelector('.profile-after-registration');
const loggedCard = document.getElementById('loggedCard');
const userFirstName = document.getElementById('profile-name-modal');
const userLastName = document.getElementById('profile-last-name-modal');
const insideLetters = document.getElementById('inside-letters');
const insideLettersLogin = document.getElementById('inside-letters-login');
const userCard = document.getElementById('user-card');
const copyPic = document.getElementById('card-number-copy');
const loggedCardElement = document.getElementById('user-card');
const originalCopyPicSrc = copyPic.src;
const logOut = document.getElementById('log-out');

const userNameCard = document.getElementById('user-name');
const userCardNumber = document.getElementById('card-number');
const inputUserName = document.getElementById('input-user-name');
const inputUserCardNumber = document.getElementById('input-card-number');
const submitButton = document.getElementById('submit-button-card');

const blockElement = document.querySelector('.block-card');
const findCard = document.querySelector('.find');

const loginLetters = document.querySelector('.login-letters');


copyPic.addEventListener('click', () => {
    const cardNumber = loggedCardElement.textContent;
    
    const textarea = document.createElement('textarea');
    textarea.value = cardNumber;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    const copyMessage = document.createElement('p');
    copyMessage.textContent = 'Copied!';
    copyMessage.style.fontSize = '13px';
    copyMessage.style.color = '#BB945F';
    copyMessage.style.display = 'block';
    copyMessage.style.padding = '0';
    copyMessage.style.margin = '0';
    copyPic.parentElement.appendChild(copyMessage);

    setTimeout(() => {
        copyPic.parentElement.removeChild(copyMessage);
        copyPic.src = originalCopyPicSrc;
    }, 1000);
});


function updatePageState() {
    const loggedInUser = checkLoggedIn();
    if (loggedInUser) {

    } else {
        inputUserName.classList.remove('hidden');
        inputUserCardNumber.classList.remove('hidden');
    }
}



// buy card validation

const bankCardNumber = document.getElementById('buy-card-number');
const bankCardExpirationMonth = document.getElementById('buy-card-exp-month');
const bankCardExpirationYear = document.getElementById('buy-card-exp-year');
const bankCardCvc = document.getElementById('buy-card-cvc');
const bankCardName = document.getElementById('buy-card-name');
const bankCardPostCode = document.getElementById('buy-card-code');
const bankCardCity = document.getElementById('buy-card-city');
const buyCardButton = document.getElementById('card-buy-btn');
const cardNumberRegex = /^[0-9]+$/;
const cardNameRegex = /^[A-Za-z ]+$/;
const monthRegex = /^(0[1-9]|1[0-2])$/;
const yearRegex = /^(2[3-9]|3[0-5])$/;

bankCardNumber.addEventListener('input', () => {
    if (!cardNumberRegex.test(bankCardNumber.value)) {
        showValidationHint(bankCardNumber, 'Please enter your card number.');
    } else {
        clearValidationHint(bankCardNumber);
    }
});

bankCardExpirationMonth.addEventListener('input', () => {
    if (!monthRegex.test(bankCardExpirationMonth.value)) {
        showValidationHint(bankCardExpirationMonth, 'Please enter valid card expiration month.');
    } else {
        clearValidationHint(bankCardExpirationMonth);
    }
});

bankCardExpirationYear.addEventListener('input', () => {
    if (!yearRegex.test(bankCardExpirationYear.value)) {
        showValidationHint(bankCardExpirationYear, 'Please enter valid card expiration year.');
    } else {
        clearValidationHint(bankCardExpirationYear);
    }
});

bankCardCvc.addEventListener('input', () => {
    if (!cardNumberRegex.test(bankCardCvc.value)) {
        showValidationHint(bankCardCvc, 'Please enter valid card CVC.');
    } else {
        clearValidationHint(bankCardCvc);
    }
});

bankCardName.addEventListener('input', () => {
    if (!cardNameRegex.test(bankCardName.value)) {
        showValidationHint(bankCardName, 'Please enter cardholder\'s name.');
    } else {
        clearValidationHint(bankCardName);
    }
});

bankCardPostCode.addEventListener('input', () => {
    if (!cardNumberRegex.test(bankCardPostCode.value)) {
        showValidationHint(bankCardPostCode, 'Please enter your postcode.');
    } else {
        clearValidationHint(bankCardPostCode);
    }
});

bankCardCity.addEventListener('input', () => {
    if (!cardNameRegex.test(bankCardCity.value)) {
        showValidationHint(bankCardCity, 'Please enter your city.');
    } else {
        clearValidationHint(bankCardCity);
    }
});

const buyLibCard = document.querySelector('.buy-lib-card');

function updatePageState() {
    const loggedInUser = checkLoggedIn();
    if (loggedInUser) {

        loggedCard.textContent = loggedInUser.cardNumber;
        userCard.textContent = loggedInUser.cardNumber;
        loggedCard.style.fontSize = '13px';
        loggedCard.style.letterSpacing = '0.2px';
        userFirstName.textContent = loggedInUser.firstName;
        userLastName.textContent = loggedInUser.lastName;
        insideLetters.textContent = `${loggedInUser.firstName[0]}${loggedInUser.lastName[0]}`;
        userNameCard.textContent = `${loggedInUser.firstName} ${loggedInUser.lastName}`;
        userCardNumber.textContent = loggedInUser.cardNumber;
        document.getElementById('input-user-name').classList.add('hidden');
        document.getElementById('input-card-number').classList.add('hidden');
        userNameCard.style.color = '#BB945F';
        userCardNumber.style.color = '#BB945F';
        userNameCard.textContent = `${loggedInUser.firstName} ${loggedInUser.lastName}`;
        userCardNumber.textContent = loggedInUser.cardNumber;
        submitButton.classList.add('hidden');
        blockElement.style.display = 'flex';
        submitButton.replaceWith(blockElement);
        findCard.textContent = 'Your Library card';
        findCard.style.paddingLeft = '30px';
        document.querySelector('.get').textContent = 'Visit your profile';
        document.getElementById('get-card-description').textContent = 'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.';
        registerFromLibCard.style.display = 'none';
        loginFromLibCard.style.display = 'none';
        document.getElementById('profile-from-lib-card').style.display = 'block';
        loginModal.classList.remove('showed');
        document.querySelector('.header-log').classList.add('hidden');
        document.querySelector('.login-letters').classList.remove('hidden');
        insideLettersLogin.textContent = `${loggedInUser.firstName[0]}${loggedInUser.lastName[0]}`;
        loginLetters.title = `${loggedInUser.firstName} ${loggedInUser.lastName}`;;

        // buy card 

        const buyCardForm = document.getElementById('buy-card-form');

        let buyCardFormSubmitted = false;

        buyCardForm.addEventListener('submit', (event) => {
            event.preventDefault();
            loginModal.classList.remove('showed');
            buyLibCard.classList.add('hidden');
            popup.classList.remove('shown');
            document.body.style.overflow = 'auto';
            buyCardFormSubmitted = true;
        });

        buyButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                if (buyCardFormSubmitted) {     
                    event.preventDefault();
                    button.classList.add('hidden');
                    popup.classList.remove('shown');
                    loginModal.classList.remove('showed');
                    buyLibCard.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                } else if (!buyCardFormSubmitted) {
                    event.preventDefault();
                    loginModal.classList.remove('showed');
                    buyLibCard.classList.remove('hidden');
                };
            });
        });

       const buyLibCardCloseBtn = document.getElementById('buy-card-close-btn');

        buyLibCardCloseBtn.addEventListener('click', () => {
            buyLibCard.classList.add('hidden');
            popup.classList.remove('shown');
            document.body.style.overflow = 'auto';
        })

        document.getElementById('profile-from-lib-card').addEventListener('click', event => {
            event.preventDefault();
            popup.classList.add('shown');
            myProfileModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });


    loginLetters.addEventListener('click', () => {
        profileBeforeRegistration.classList.remove('active');
        toggleProfileCard(profileAfterRegistration);
        closeBurgerMenu();
        event.stopPropagation();
    });

    // Close profile card when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!profileAfterRegistration.contains(event.target)) {
            profileAfterRegistration.classList.remove('active');
        }
    });

    // Function to toggle active class and display profile card
    function toggleProfileCard(profileCard) {
        profileCard.classList.toggle('active');
    }

    // Close profile card on header click
    document.querySelector('header').addEventListener('click', () => {
        profileAfterRegistration.classList.remove('active');
    });

    // Close profile card on body click
    document.body.addEventListener('click', () => {
        profileAfterRegistration.classList.remove('active');
    });

        // User is logged in
        
    } else {

    userNameCard.classList.add('hidden');
    userCardNumber.classList.add('hidden');
    }
}

// logout

logOut.addEventListener('click', () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        const user = JSON.parse(loggedInUser);
        localStorage.setItem(user.cardNumber, loggedInUser);
        localStorage.removeItem('loggedInUser');
    }
    window.location.reload();
});

// prevent default click in card check

const submitButtonCard = document.getElementById('submit-button-card');
const cardCheckForm = document.getElementById('card-check-form');


cardCheckForm.addEventListener('submit', (event) => {
    event.preventDefault();
});

// Handle registration form submission
signUpButton.addEventListener('click', (event) => {
    event.preventDefault();
    const firstName = document.getElementById('register-user-name').value;
    const lastName = document.getElementById('register-user-last-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    
    registerUser(firstName, lastName, email, password);
    registerModal.style.display = 'none';
    updatePageState();
    location.reload();
});

// Handle switching between states
linkToLogin.addEventListener('click', () => {
    // Switch to the logged-in state
    // Update page elements or UI accordingly
    updatePageState();
});

// Check the initial page state when the script runs
updatePageState();


// my profile window

const myProfile = document.getElementById('my-profile-check');
const myProfileModal = document.getElementById('my-profile-modal');
const profileCloseBtn = document.getElementById('profile-close-btn');

myProfile.addEventListener('click', event => {
        event.preventDefault();
        popup.classList.add('shown');
        loginModal.classList.remove('showed');
        myProfileModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    
// Close the modal when clicking the close button
profileCloseBtn.addEventListener('click', () => {
    popup.classList.remove('shown');
    myProfileModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    });
    

});


// self-check