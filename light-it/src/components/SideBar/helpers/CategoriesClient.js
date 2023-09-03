import Client from "../../../utils/Client";

export default class CategoriesClient {
    static BASE_URL = 'https://us-central1-prueba-front-280718.cloudfunctions.net';
    static ABERTURAS_ENDPOINT = '/aberturas';
    static EQUIPAMIENTO_ENDPOINT = '/equipamiento';
    static TERMINACIONES_ENDPOINT = '/terminaciones';

    getItemsForAberturas() {
        const url = CategoriesClient.BASE_URL + CategoriesClient.ABERTURAS_ENDPOINT;
        const client = new Client();
        return client.makeFetch(url);
    }

    getItemsForEquipamiento() {
        const url = CategoriesClient.BASE_URL + CategoriesClient.EQUIPAMIENTO_ENDPOINT;
        const client = new Client();
        return client.makeFetch(url);
    }

    getItemsForTerminaciones() {
        const url = CategoriesClient.BASE_URL + CategoriesClient.TERMINACIONES_ENDPOINT;
        const client = new Client();
        return client.makeFetch(url);
    }
}