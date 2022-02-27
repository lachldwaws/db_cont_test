const Express = require('express');
const MySQL = require('mysql');

const app = Express();
const port = 5000;

const connection_parameters = {
    host: "database",
    user: "root",
    password: process.env.MYSQL_ROOT_PASSWORD
};

var db = MySQL.createConnection(connection_parameters);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
    console.log(process.env);
    db.connect(err => {
        if (err) throw Error(`Error during connection: ${err}\n`);
        else console.log("Connected to MySQL!\n");
    });
})

app.get('/', (req, res) => {
    console.log("This is the homepage.");
    res.status(201).send("What's up yo. Nothing created, just testing the 201 code.");
});