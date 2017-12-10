var map = L.map('map').setView([55.953, -3.188], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYmxldGhlcmVyIiwiYSI6ImNqYWdsbW9kdDFkbXQycXBsbWhpMXM3ZWMifQ.quwSOSS-tfYWJ1jEP0Voqg', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(map);

// name, lat, lng, altitude
var gateways = [
    ["New College", 55.94970, -3.19552, 111],
    ["Easter Bush", 55.86593, -3.20132, 204],
    ["Kings Buildings", 55.92302, -3.17503, 90],
    ["Western General Hospital", 55.96232, -3.23191, 69],
    ["Charterisland", , 55.95024, -3.18084, 76],
    ["UoE Library Annex", 55.930618, -3.301648, 0]
];

//Loop through the gateways array
for (var i = 0; i < gateways.length; i++) {

    var lon = markers[i][2];
    var lat = gateways[i][1];
    var popupText = gateways[i][0];

    var markerLocation = new L.LatLng(lat, lon);
    var marker = new L.Marker(markerLocation);
    map.addLayer(marker);

    marker.bindPopup(popupText);
}
