const search = document.querySelector('#search');
const photoTexts = document.querySelectorAll('.gallery data-caption');

const handlesearch = event => {
    const searchTerm = event.target.value.toLowerCase();

    photoTexts.forEach(photoText => {
        const text = photoText.textContent.toLowerCase();
        const photo = photoText.parentElement;

        if(text.includes(searchTerm)){
            photo.style.display = "block";
        } else{
            photo.style.display = "none"
        }
    })
}

search.addEventListener('keyup', handlesearch)