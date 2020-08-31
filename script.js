const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader')
// Helper function to set Attributes on DOM Elements    
function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

let photosArray = []
// create elements for Links& photos, and add to dom
function displayPhotos() {
    photosArray.forEach((photo) => {
        // create <A> link to unsplash
        
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        })
        // item.setAttribute('herf', photo.links.html);
        // item.setAttribute('target', '_blank');
        // create <img> for photo
        
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);
        // put <img> inside <a> and put both inside image-container
        item.appendChild(img);
        imageContainer.appendChild(item) 
    });
}
// unsplash API
const apikey = 'QPNIBwjLgazOSSTDBq_PKi1RiGGWvX7faxgvefu1K0M';
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/?client_id=${apikey}&count=${count}`;

// Get photos from unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // Catch error here
        console.log (error)
    }
};

// om load

getPhotos()


