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

    function addDownloadLink(imgElement, imageUrl) {
        // download link
        const downloadLink = document.createElement('a');
        downloadLink.href = imageUrl;
        downloadLink.target = '_blank';
        downloadLink.classList.add('download-link');
    
        // download icon
        const downloadIcon = document.createElement('img');
        downloadIcon.src = 'download.svg';
        downloadIcon.alt = 'Download';
        downloadIcon.style.width = '30px';
    
        // download icon to download link
        downloadLink.appendChild(downloadIcon);
    
        // download link to image container
        imgElement.parentNode.appendChild(downloadLink);
    }

    // fetch images from Unsplash and update gallery
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
                
                    // container for image and download link
                    const imageContainer = document.createElement('div');
                    imageContainer.classList.add('image-container');
                    galleryItem.appendChild(imageContainer);
                
                    // imgElement to image container
                    imageContainer.appendChild(imgElement);
                
                    // download link to image
                    addDownloadLink(imgElement, image.urls.full);
                
                    // galleryItem to gallery
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

    // Enter key press - no focus
    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const query = searchInput.value;
            if (query.trim() !== '') {
                fetchAndDisplayImages(updateApiUrl());
                searchInput.blur(); // Remove focus from the input
            }
        }
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
                
                    // container for image and download link
                    const imageContainer = document.createElement('div');
                    imageContainer.classList.add('image-container');
                    galleryItem.appendChild(imageContainer);
                
                    // imgElement to image container
                    imageContainer.appendChild(imgElement);
                
                    // download link to image
                    addDownloadLink(imgElement, image.urls.full);
                
                    // galleryItem to gallery
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
