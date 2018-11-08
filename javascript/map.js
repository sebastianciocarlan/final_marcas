var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});
var map = L.map('map').setView([55.756318, 37.581164], 19).addLayer(osm);
L.marker([55.756318, 37.581164])
.addTo(map)
.bindPopup('Terminal Central Office')
.openPopup();