function getLocationAndSearch() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(searchNearbyStores, showError);
    } else { 
        alert("Geolocalização não é suportada por este navegador.");
    }
}

function searchNearbyStores(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    console.log("Buscar lojas próximas a", latitude, longitude);

    // Simulação de resultados
    displayResults(["Loja 1", "Loja 2", "Loja 3"]);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("Usuário negou a solicitação de Geolocalização.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Informações de localização indisponíveis.");
            break;
        case error.TIMEOUT:
            alert("A solicitação para obter a localização do usuário expirou.");
            break;
        case error.UNKNOWN_ERROR:
            alert("Um erro desconhecido ocorreu.");
            break;
    }
}

function displayResults(stores) {
    console.log("Lojas encontradas:", stores);
}

document.getElementById("searchButton").addEventListener("click", getLocationAndSearch);
