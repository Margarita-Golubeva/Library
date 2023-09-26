document.addEventListener('DOMContentLoaded', function () {

    const searchInput = document.getElementById('searchInput');
    const clearButton = document.getElementById('clearButton');
    const gallery = document.querySelector('.gallery');

    // fetch and display images from API
    function fetchImages(query) {
        // API fetch here
    }

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
            } searchInput.blur();
        }
    });

    // start: focus to the search input and clear previous value
    searchInput.focus();
    searchInput.value = '';

});
