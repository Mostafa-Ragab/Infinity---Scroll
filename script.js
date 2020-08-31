const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader')

// unsplash API
const apikey = 'QPNIBwjLgazOSSTDBq_PKi1RiGGWvX7faxgvefu1K0M';
const Count = 30;
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apikey}&count=${Count}`;

let ready = false;
let imagesLoaded = 0;
let = totalImages = 0;
let photosArray = [];

// Check if all images were loaded
function imageLoaded() {
    console.log('images loaded');
    imagesLoaded++ 
    if(imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true
    }
}
// Helper function to set Attributes on DOM Elements    
function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// create elements for Links& photos, and add to dom
function displayPhotos() {
    imagesLoaded =0;
    totalImages = photosArray.length;
    photosArray.forEach((photo) => {
        // create <A> link to unsplash
        const item = document.createElement('a');
        // item.setAttribute('herf', photo.links.html);
        // item.setAttribute('target', '_blank');
        // create <img> for photo
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        })
        
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);
        
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })
       // Evenet listener, check when each is finsished loading
       img.addEventListener('load', imageLoaded)
     // put <img> inside <a> and put both inside image-container
        item.appendChild(img);
        imageContainer.appendChild(item) 
    });
}

// Get photos from unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // Catch error here
        // console.log (error)
    }
};

// Check To See if scrolling near bottom of the page , load moe photos
window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready)
    {
        ready =false;
        getPhotos()
    }
})
// on load

getPhotos()


