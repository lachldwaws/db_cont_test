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

/*
 * ************************* CRUD Routes *************************
 * Generally, every route here is an authenticated route.
 * The best way to protect these routes and leave authentication
 * to the frontend is to make the server and database only
 * privately accessible.
 */

// Add a user to the users table.

app.put('/users/add', (req, res) => {
    // TODO
    res.status(501).send("To be implemented.");
});

// Read all the entries in the users table.

app.get('/users', (req, res) => {
    db.query("SELECT * FROM users;", (err, result, fields) => {
        console.log("Querying all users.");
        res.status(err ? 500 : 200).send(err ? err : result);
    });
});

// Get a specific user. Search by username only.

app.get('/users/find/*', (req, res) => {
    db.query("SELECT * FROM users WHERE username=?;", [req.params['0']], (err, result, fields) => {
        console.log(`Finding user with username ${req.params['0']}...`);
        res.status(err ? 500 : 200).send(err ? err : result);
    });
});

// Update a user's information. It is only possible to update a user's username, email address, or password hash.
// Expect 2 key-value pairs in the form. First pair is "user_id" / id (hidden). Second pair is field_name / new_value.

app.patch('/users/update', (req, res) => {
    // TODO
    res.status(501).send("To be implemented.");
});

// Delete a user from the users table. Requires the username of the user to be deleted.

app.delete('/users/delete', (req, res) => {
    // TODO
    res.status(501).send("To be implemented.");
});

/* Other Routes */

app.get('/', (req, res) => {
    console.log("This is the homepage.");
    res.status(201).send("What's up yo. Nothing created, just testing the 201 code.");
});