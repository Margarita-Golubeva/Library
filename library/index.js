// burger menu start

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
       document.querySelector(".header").classList.toggle("open") 
    });

    document.getElementById("nav-menu").addEventListener('click', event => {
        event._isClickWithInMenu = true;
    });

    document.getElementById("burger").addEventListener('click', event => {
        event._isClickWithInMenu = true;
    });

    document.body.addEventListener('click', event => {
        if (event._isClickWithInMenu) return;
        document.querySelector(".header").classList.remove("open")
    });

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
            }, 300);
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