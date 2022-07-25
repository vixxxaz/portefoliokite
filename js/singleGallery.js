window.addEventListener('load', () => {
    let galleriesRaw = '{"gal1": {"title": "Montagne et autres 2022", "images": ["image-6.jpg","image-7.jpg","image-8.jpg","image-10.jpg","image-11.jpg","image-13.jpg","image-32.jpg","image-33.jpg","image-27.jpg","image-20.jpg","image-19.jpg","image-29.jpg"]},"gal2":{ "title": "Gréce 2022", "images": ["image-31.jpg","image-30.jpg","image-28.jpg","image-26.jpg","image-25.jpg","image-24.jpg","image-23.jpg","image-22.jpg","image-21.jpg","image-18.jpg","image-17.jpg","image-16.jpg","image-15.jpg","image-14.jpg","image-12.jpg","image-9.jpg","image-5.jpg","image-4.jpg","image-2.jpg","image-1.jpg"]}}';
    let galleries = JSON.parse(galleriesRaw);
    let searchParams = new URLSearchParams(window.location.search);

    if (searchParams.has('id')) {
        let galId = searchParams.get('id');
        let galleryToDisplay = galleries[galId];
        let rootUl = document.querySelector('#singleGallery ul');
        let galTitle = document.querySelector('#singleGallery h1');
        galTitle.innerHTML = galleryToDisplay.title;
        for (let i = 0; i < galleryToDisplay.images.length; i++) {
            let theLi = document.createElement('li');
            let theImg = document.createElement('img');
            theImg.src = `images/${galleryToDisplay.images[i]}`;
            theImg.addEventListener("click", showSinglePict, false);
            theImg.style.cursor = 'pointer';
            theLi.appendChild(theImg);
            rootUl.appendChild(theLi);
        }
    } else {
        window.location.pathname = 'galleries.html';
    }

}, false);


function showSinglePict(e) {
    let image = e.target;
    let imageContainer = document.getElementById('galleryContainer');
    let bigImage = imageContainer.querySelector('img');
    bigImage.src = image.src;
    imageContainer.classList.toggle('visible');
    imageContainer.addEventListener('click', closeSinglePict, false);
}

function closeSinglePict() {
    let imageContainer = document.getElementById('galleryContainer');
    imageContainer.classList.toggle('visible');
}