document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const clearButton = document.getElementById('clearButton');
    const gallery = document.querySelector('.gallery');

    // fetch and display images from API
    const apiKey = '111zaJ5SaKRwNnHtOkLo6sAIhW0S_cJgd2WPeXezZrE';

    // search query and other parameters
    let query = '';

    // input events on the searchInput element
    searchInput.addEventListener('input', function () {
        query = this.value.trim();
        const apiUrl = updateApiUrl();
        fetchAndDisplayImages(apiUrl);
    });

    const perPage = 30;
    const tagMode = 'all';

    // update the API URL when the input changes
    function updateApiUrl() {
        return `https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}&tag_mode=${tagMode}&client_id=${apiKey}`;
    }

    // fetch images from the Unsplash and update the gallery
    function fetchAndDisplayImages(apiUrl) {
        gallery.innerHTML = '';

        // fetch images
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                // data.results with images
                const images = data.results;

                images.forEach((image) => {
                    const imgElement = document.createElement('img');

                    imgElement.src = image.urls.small;
                    imgElement.alt = image.description || '';
                    imgElement.title = image.description || '';

                    const galleryItem = document.createElement('div');
                    galleryItem.classList.add('gallery-item');

                    const figure = document.createElement('figure');
                    figure.appendChild(imgElement);
                    galleryItem.appendChild(figure);
                    gallery.appendChild(galleryItem);
                });
            })
            .catch((error) => {
                console.error('Error fetching images:', error);
            });
    }

    // update the gallery on input changes
    searchInput.addEventListener('input', function () {
        query = this.value.trim();
        const apiUrl = updateApiUrl();
        fetchAndDisplayImages(apiUrl);
    });

    // clear the search input
    clearButton.addEventListener('click', function () {
        searchInput.value = '';
        searchInput.focus();
    });

    // focus on the search input when opened
    searchInput.focus();

    // fetch random images
    function fetchInitialRandomImages() {
        const randomImagesApiUrl = `https://api.unsplash.com/photos/random?count=${perPage}&client_id=${apiKey}`;
        
        fetch(randomImagesApiUrl)
            .then((response) => response.json())
            .then((data) => {
                const randomImages = data;
                
                randomImages.forEach((image) => {
                    const imgElement = document.createElement('img');
                    imgElement.src = image.urls.small;
                    imgElement.alt = image.description || '';
                    imgElement.title = image.description || '';
                    
                    const galleryItem = document.createElement('div');
                    galleryItem.classList.add('gallery-item');
                    
                    const figure = document.createElement('figure');
                    figure.appendChild(imgElement);
                    galleryItem.appendChild(figure);
                    gallery.appendChild(galleryItem);
                });
            })
            .catch((error) => {
                console.error('Error fetching initial random images:', error);
            });
    }

    // random images when the page loads
    window.onload = fetchInitialRandomImages;
    
});
