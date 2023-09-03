export default class Client {
    async makeFetch(url) {
        return await fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((responseData) => {
                return responseData;
            })
            .catch((error) => {
                console.error('Error:', error); // Should handle the error properly.
            });
    }
}