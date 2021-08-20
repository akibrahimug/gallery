
const search = document.querySelector('#search');
const photoTexts = document.querySelectorAll('[data-caption]');

const searchBar = event => {
    const searchTerm = event.target.value.toLowerCase();
    photoTexts.forEach(photoTexts => {
        const text = photoTexts.getAttribute('data-caption').toLowerCase();
        if(text.includes(searchTerm)) {
            photoTexts.style.display = "block";
        } else {
            photoTexts.style.display = "none";
        }
    });
}

search.addEventListener('keyup', searchBar);