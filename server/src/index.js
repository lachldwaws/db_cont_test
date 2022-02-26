const Express = require('express');
const MySQL = require('mysql');

const app = Express();
const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})

app.get('/', (req, res) => {
    console.log("This is the homepage.");
    res.status(201).send("What's up yo. Nothing created, just testing the 201 code.");
});