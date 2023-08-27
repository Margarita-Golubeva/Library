document.addEventListener("DOMContentLoaded", function() {
    
// burger menu start

const headerLinks = document.querySelectorAll('.header-item');

headerLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        document.querySelector(".header").classList.remove("open")
    });
});

// burger menu end

// profile

const headerLog = document.querySelector('.header-log');
const profileBeforeRegistration = document.querySelector('.profile-before-registration');

headerLog.addEventListener('click', () => {
    toggleProfileCard(profileBeforeRegistration);
    closeBurgerMenu(); // Close burger menu
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
        event.preventDefault(); // Prevent form submission
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

// slider

const buttons = [
    document.getElementById('mediabtn1'),
    document.getElementById('mediabtn2'),
    document.getElementById('mediabtn3'),
    document.getElementById('mediabtn4'),
    document.getElementById('mediabtn5'),
];

const pageBtn = [
    document.getElementById('page-button1'),
    document.getElementById('page-button2'),
    document.getElementById('page-button3'),
    document.getElementById('page-button4'),
    document.getElementById('page-button5'),
]

const carousel = document.querySelector('.carousel');
const buttonPrev = document.querySelector('.caret-left');
const buttonNext = document.querySelector('.caret-right');
const picsContainer = document.querySelector('.pics');

function removeActiveClass() {
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    pageBtn.forEach(page => {
        page.classList.remove('active');
    });
}

function updateCarouselPosition(newPosition) {
    currentPosition = newPosition;
    carousel.style.left = `${currentPosition}px`;
    removeActiveClass();
    const index = Math.abs(currentPosition / itemWidth);
    buttons[index].classList.add('active');
    pageBtn[index].classList.add('active');
    updateCaretButtonsDisplay();
}

function updateCaretButtonsDisplay() {
    if (picsContainer.clientWidth <= 450) {
        buttonPrev.style.display = currentPosition === 0 ? 'none' : 'block';
        buttonNext.style.display = currentPosition <= -itemWidth * (buttons.length - 1) ? 'none' : 'block';
    } else {
        buttonPrev.style.display = 'none';
        buttonNext.style.display = 'none';
    }
}

function updatePicsContainerWidth() {
    const windowWidth = window.innerWidth;

    if (windowWidth > 1439 && (buttons[3].classList.contains('active') || buttons[4].classList.contains('active'))) {
        carousel.style.left = `-950px`;
        buttons[2].classList.add('active');
        pageBtn[2].classList.add('active');
    } else if (windowWidth >= 1024 && buttons[4].classList.contains('active')) {
        carousel.style.left = `-1425px`;
        buttons[3].classList.add('active');
        pageBtn[3].classList.add('active');
    }
}


let currentPosition = 0;
const itemWidth = 475;

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const position = -itemWidth * index;
        updateCarouselPosition(position);
    });
});

buttonPrev.addEventListener('click', () => {
    currentPosition += itemWidth;
    updateCarouselPosition(currentPosition);
});

buttonNext.addEventListener('click', () => {
    currentPosition -= itemWidth;
    updateCarouselPosition(currentPosition);
});

window.addEventListener('resize', () => {
    updateCaretButtonsDisplay();
    updatePicsContainerWidth();
});

updateCaretButtonsDisplay();
updatePicsContainerWidth();

// favorites

const bookLists = [
    document.getElementById('book-list-winter'),
    document.getElementById('book-list-spring'),
    document.getElementById('book-list-summer'),
    document.getElementById('book-list-autumn')
];

const seasonRadios = [
    document.getElementById('winter'),
    document.getElementById('spring'),
    document.getElementById('summer'),
    document.getElementById('autumn')
];

function switchBookList(nextListIndex) {
    const currentList = document.querySelector('.book-list.active');
    const nextList = bookLists[nextListIndex];

    if (currentList && nextList !== currentList) {
        currentList.style.animation = 'booklistHide 0.2s linear forwards';
        currentList.addEventListener('animationend', () => {
            currentList.style.display = 'none';
            currentList.classList.remove('active');
        }, { once: true });
    }

    if (nextList) {
        if (!nextList.classList.contains('active')) {
            setTimeout(() => {
                nextList.style.animation = 'booklistShow 0.2s linear forwards';
                nextList.style.display = 'flex';
                nextList.classList.add('active');
            }, 180);
        }
    }
}

seasonRadios.forEach((radio, index) => {
    radio.addEventListener('click', () => {
        switchBookList(index);
    });
});

});


// self-check