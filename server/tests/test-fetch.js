// We are using node-fetch@2 - Check the documentation below for more details.
// https://www.npmjs.com/package/node-fetch
// This is a simple script to practise using fetch.
const fetch = require('node-fetch');

const testFetch = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}

testFetch("https://www.forsakenidol.com/").then(response => {
    console.log(response);
});