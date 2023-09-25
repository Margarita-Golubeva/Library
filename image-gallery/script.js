document.addEventListener('DOMContentLoaded', function () {

    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');


    // fetch and display images from API
    function fetchImages(query) {
        // API fetch here
        // append images to the 'main' section
    }

    // search button click
    searchButton.addEventListener('click', function () {
        const query = searchInput.value;
        if (query.trim() !== '') {
            fetchImages(query);
        }
    });

    // clearing search input
    clearButton.addEventListener('click', function () {
        searchInput.value = '';
        searchInput.focus();
    });

    // Enter key press
    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const query = searchInput.value;
            if (query.trim() !== '') {
                fetchImages(query);
            }
        }
    });

    // start: focus to the search input and clear previous value
    searchInput.focus();
    searchInput.value = '';
});
