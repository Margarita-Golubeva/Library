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

})



console.log('[100/100]\n• Вёрстка валидная +10 https://validator.w3.org/. "Document checking completed. No errors or warnings to show." [x].\n\n• Вёрстка семантическая +16 [x].\n- в коде страницы присутствуют: <header>, <main>, <footer> +2 [x].\n- шесть элементов <section> +2 [x].\n- только один заголовок <h1> +2 [x].\n- пять заголовков <h2> [x].\n- один элемент <nav> (панель навигации в хедере) [x].\n- два списка ul > li > a (панель навигации, ссылки на соцсети в футере) +2 [x].\n- семь кнопок <button> +2 [x].\n- два инпута <input> +2 [x].\n\n• Вёрстка соответствует макету +54 [x].\n- блок <header> +8 [x]. главное для нас, чтобы расстояние между элементами меню было одинаковое, 30px [x].\n- Элементы меню работают как якоря. При нажатии на один из них нас перебросит наверх соответствующего раздела.\nСами элементы меню при наведении (эффект hover) должны быть интерактивными (подчеркнутые, cursor: pointer).\nРасстояние от самого меню до иконки пользователя - 40px. Иконка является отдльным элементом, и не входит в <nav>.\n- Текст "Brooklyn Public Library" находится в <h1> [x].\n- секция Welcome +4 [x].\n- секция About +6 [x].\nвсе картинки, в папке с картинками, в папке должны быть все 5.\nРасстояния между кнопками пагинации 10px. Интерактивная область (область нажатия, выделяемая cursor:pointer) размером +5px в каждую сторону (квадратная).\n- секция Favorites +8 [x].\nИнтерактивные кнопки имеют структуру input type="radio" + label.\nДобавлена небольшая область вокруг надписи для того, чтобы была возможность легче наводить мышку.\nКартинок и описания добавлены в проект.\nКнопки "buy" интерактивные, плавно меняют свой цвет при наведении на них, как указано в макете styleguides.\nКнопка "own" не интерактивная, не нажимается. На ней присутствует атрибут disabled.\n- секция CoffeShop +6 [x].\n- секция Contacts +6 [x].\nКарту вставлена отдельным сервисом с необходимым размером.\nВезде, где в тексте встречаются цифры в виде телефонного номера, это ссылки с типом "tel" и номером.\nТам, где в тексте встречается текст с именем контактного лица, это ссылка с типом "mailto" и адресом почты.\n- секция LibraryCard +8 [x].\n"Find your Library card" - это форма с полями input.\nВсе 3 кнопки интерактивные, плавно меняют цвет при наведении на них, как указано в макете styleguides.\nИконки из модального окна (Visits, Bonuses, Books) добавлены в папку проекта.\n- блок <footer> +8 [x].\nАдрес библиотеки дан ссылкой (место на карте).\nИконки соцсетей также даны ссылками.\nВместо Username мое имя на английском языке и ссылка на GitHub.\n\n•  Общие требования к верстке +20 [x].\n- для построения используются флексы (display: flex...) +2 [x].\n- при уменьшении масштаба страницы браузера вся вёрстка (контент и фоны) размещается по центру, а не сдвигается в сторону +2 [x].\nФон за рамками страницы черный.\n- иконки добавлены в формате .svg. Обращаем внимание на формат, а не на способ добавления +2. [x].\n- изображения добавлены в формате .jpg (.jpeg) или .png +2 [x].\n- есть favicon +2. Иконка содержит 3 буквы "BPL" (Brooklyn Public Library) [x].\n- плавная прокрутка по якорям +2 [x].\n- в футере название ссылки Username заменено и ведет на GitHub +2 [x].\n- в футере ссылка The Rolling Scopes School ведет на страницу курса https://rs.school/js-stage0/ +2 [x].\n- интерактивность элементов согласно макету.(cursor: pointer, и другие визуальные эффекты: изменение цвета фона или цвета шрифта) +2 [x].\n- обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияет на соседние элементы +2.');