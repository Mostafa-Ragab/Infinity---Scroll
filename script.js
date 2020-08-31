// unsplash API
const apikey = 'QPNIBwjLgazOSSTDBq_PKi1RiGGWvX7faxgvefu1K0M';
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/?client_id=${apikey}&count=${count}`;

// Get photos from unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        // Catch error here
        console.log (error)
    }
};

// om load

getPhotos()


