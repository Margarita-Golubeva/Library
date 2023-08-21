// burger menu start

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("#about").addEventListener('click', event => {
        document.querySelector(".header").classList.remove("open")
    })

    document.getElementById("#favorites").addEventListener('click', event => {
        document.querySelector(".header").classList.remove("open")
    })

    document.getElementById("#coffee-shop").addEventListener('click', event => {
        document.querySelector(".header").classList.remove("open")
    })

    document.getElementById("#contacts").addEventListener('click', event => {
        document.querySelector(".header").classList.remove("open")
    })

    document.getElementById("#lib-card").addEventListener('click', event => {
        document.querySelector(".header").classList.remove("open")
    })

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
        currentList.style.animation = 'booklistHide 0.3s linear forwards';
        currentList.addEventListener('animationend', () => {
            currentList.style.display = 'none';
            currentList.classList.remove('active');
        }, { once: true });
    }

    if (nextList) {
        if (!nextList.classList.contains('active')) {
            setTimeout(() => {
                nextList.style.animation = 'booklistShow 0.3s linear forwards';
                nextList.style.display = 'flex';
                nextList.classList.add('active');
            }, 280);
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

console.log('[50/50]\nВёрстка соответствует макету. Ширина экрана 768px +26\nблок <header> +2\nсекция Welcome +2\nсекция About +4. новые элементы в виде стрелок и переход на 5 точек вместо 3х\nрасстояние от картинки до точек 40px.\nсекция Favorites +2\nкнопка own, вместо buy для последней книги. какие кнопки находились в состояние "own" на Desktop, те же кнопки в том же состоянии будут и на Tablet. условие соблюдено: +2\nсекция CoffeShop +4\nсекция Contacts +4\nсекция LibraryCard +4\nблок <footer> + 2\nНи на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12\nнет полосы прокрутки при ширине страницы от 1440рх до 640рх +4.\nэлементы не выходят за пределы окна браузера при ширине страницы от 1440рх до 640рх +4.\nэлементы не наезжают друг на друга при ширине страницы от 1440рх до 640рх +4.\nНа ширине экрана 768рх реализовано адаптивное меню +12 (появление бургер-меню на ширине 1024px)\nВерсия Tablet, отступ иконки юзера от правого края - 105px. Такое же расстояние и у открытого меню. Сам крест отцентрирован по поцентральной позиции бургер-иконки. При переходе из одного состояния в другое ничего не прыгает. Само меню прижато к правому краю целиком. Иконка юзера не прыгает, независимо от величины отступа: +2\nЦвет выпавшего меню должен совпадать с цветом полоски навигации.\nпри нажатии на бургер-иконку плавно появляется адаптивное меню +4\nпри нажатии на крестик, или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран +2\nссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям при нажатии, а само адаптивное меню при этом плавно скрывается +2\nразмеры открытого бургер-меню соответствуют макету, так же открытое бургер-меню проверяется на PixelPerfect +2');