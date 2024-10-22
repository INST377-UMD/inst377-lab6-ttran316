// Make map start in US with a small zoom of 3
const map = L.map('map').setView([35, -100], 3);

// Add USA map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
// .toFixed() returns string, so ' * 1' is a trick to convert to number
}

// get 3 cords
const coords = [
    { lat: getRandomInRange(30, 35, 3), lng: getRandomInRange(-90, -100, 3) },
    { lat: getRandomInRange(30, 35, 3), lng: getRandomInRange(-90, -100, 3) },
    { lat: getRandomInRange(30, 35, 3), lng: getRandomInRange(-90, -100, 3) }
];

// Markers
coords.forEach((coord, index) => {
    //Blue on map
    const marker = L.marker([coord.lat, coord.lng]).addTo(map)
        
    //HTML marker desciprtions
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coord.lat}&longitude=${coord.lng}&localityLanguage=en`)
        .then(response => response.json())
        .then(data => {
            document.getElementById(`marker1`).textContent = `Latitude: ${coord.lat}, Longitude: ${coord.lng}`;
            document.getElementById(`markerLocal1`).textContent = `Locality: ${data.locality || 'N/A'}`;

            document.getElementById(`marker2`).textContent = `Latitude: ${coord.lat}, Longitude: ${coord.lng}`;
            document.getElementById(`markerLocal2`).textContent = `Locality: ${data.locality || 'N/A'}`;

            document.getElementById(`marker3`).textContent = `Latitude: ${coord.lat}, Longitude: ${coord.lng}`;
            document.getElementById(`markerLocal3`).textContent = `Locality: ${data.locality || 'N/A'}`;
        })
});
