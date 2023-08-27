document.addEventListener("DOMContentLoaded", function() {
    
// BURGER MENU

const headerLinks = document.querySelectorAll('.header-item');

headerLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        document.querySelector(".header").classList.remove("open")
    });
});

// SLIDER

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

// FAVORITES

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