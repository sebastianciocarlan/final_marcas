var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});
var map = L.map('map').setView([23.140445, -82.351644], 17).addLayer(osm);
L.marker([23.141165, -82.351834])
.addTo(map)
.bindPopup('La Catedral de la Habana.')
.openPopup();