const Express = require('express');
const MySQL = require('mysql');

const app = Express();
const port = 5000;

const connection_parameters = {
    host: "database",
    user: "root",
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: 'website'
};

var db = MySQL.createConnection(connection_parameters);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
    db.connect(err => {
        if (err) throw Error(`Error during connection: ${err}\n`);
        else console.log("Connected to MySQL!\n");
    });
})

/* CRUD Routes */

// Read all the entries in the users table.

app.get('/users', (req, res) => {
    db.query("SELECT * FROM users;", (err, result, fields) => {
        console.log("Querying all users.");
        res.status(err ? 500 : 200).send(err ? err : result);
    });
});

/* Other Routes */

app.get('/', (req, res) => {
    console.log("This is the homepage.");
    res.status(201).send("What's up yo. Nothing created, just testing the 201 code.");
});