const mockFetchStoresNearby = jest.fn();

function searchNearbyStores(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    // Chamada simulada da função
    mockFetchStoresNearby(latitude, longitude);
}
test('busca lojas próximas com base na localização', () => {
    // Define uma localização simulada
    const mockPosition = {
        coords: {
            latitude: 40.7128,
            longitude: -74.0060
        }
    };
  searchNearbyStores(mockPosition);
  expect(mockFetchStoresNearby).toHaveBeenCalledWith(40.7128, -74.0060);
});
