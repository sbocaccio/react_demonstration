export default class Client {
    static BASE_URL = 'https://us-central1-prueba-front-280718.cloudfunctions.net';
    static ABERTURAS_ENDPOINT = '/aberturas';
    static EQUIPAMIENTO_ENDPOINT = '/equipamiento';
    static TERMINACIONES_ENDPOINT = '/terminaciones';

    fetch(url) {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((responseData) => {
                console.log(responseData)
                return responseData;
            })
            .catch((error) => {
                console.error('Error:', error); // Should handle the error.
            });
    }

    fetchAberturas() {
        // You can access BASE_URL using Client.BASE_URL
        const url = Client.BASE_URL + Client.ABERTURAS_ENDPOINT;
        this.fetch(url);
    }
    fetchEquipamiento
}