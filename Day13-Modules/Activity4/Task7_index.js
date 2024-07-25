const axios = require('axios');

(async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
})();