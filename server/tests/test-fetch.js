// Axios documentation: https://www.npmjs.com/package/axios
const axios = require('axios').default;

axios({
    method: 'GET',
    url: 'http://localhost:9001/users/find',
    headers: {'Content-Type': 'application/json'},
    data: {
        username: "awesomeuser123"
    }
}).then(response => {
    // This block is executed for all 2xx response codes.
    console.log(response.status);
    console.log(response.data);
}).catch(error => {
    // Errors occur when the server responds with a status code outside of the 2xx range.
    // Our server has a few options that return 4xx and 5xx codes, so they will end up here.
    // This is explained here: https://www.npmjs.com/package/axios#handling-errors
    console.log("Error!");
    console.log(error.response.status);
    console.log(error.response.data);
});