var map = L.map('map').setView([-7.146985813276585,-34.84807889999999], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

fetch(dadosUrl)
    .then(response => response.json())
    .then(data => {
        data.forEach(point => {
            L.marker([point.Latitude, point.Longitude])
                .bindPopup("Assalto")
                .addTo(map);
        });
    })
    .catch(error => console.error('Erro ao carregar dados: ', error));

