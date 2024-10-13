// Inicializa o mapa com uma visualização padrão
let map = L.map('map').setView([-7.146985813276585, -34.84807889999999], 13);

// Adiciona a camada de tiles do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Função para atualizar o mapa com base no ano selecionado
function updateMap(year) {
    // Remove todos os marcadores do mapa
    map.eachLayer(function(layer) {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    // Busca os dados filtrados do Flask
    fetch(`/dados/${year}`)
        .then(response => response.json())
        .then(data => {
            // Adiciona novos marcadores no mapa com base nos dados retornados
            data.forEach(point => {
                L.marker([point.Latitude, point.Longitude], {
                    icon: L.icon({
                        iconUrl: 'https://cdn-icons-png.flaticon.com/512/5610/5610989.png',
                        iconSize: [15, 15]
                    })
                }).bindPopup("Assalto").addTo(map);
            });
        })
        .catch(error => console.error('Erro ao carregar dados: ', error));
}
