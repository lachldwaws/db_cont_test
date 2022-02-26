# 2-Container Database Backend

This is a simple test project to practise management of multiple containers. There are 2 interdependent services.

## The Database

The **database** runs on MySQL and contains 1 table: `Users`, with the following schema:
- `id` - Integer, primary key, automatically generated.
- `username` - Varchar(64). Not null, must be unique.
- `email` - Varchar(128). 128 characters is already very generous for an email.
- `password_hash` - Varchar(60). Bcrypt output hashes are always 60 characters in length.

## The Server

The **server** is just a simple abstraction layer as a  Node.js project. It sits in front of the database, exposing CRUD operations and performing input verification on create & update requests before inserting into the database.

The 4 operatiations are *create* (Adding a new user), *read* (Get a user's information), *update* (Change a user's information), and *delete* (remove a user).

 Most verification includes:
- ***Input Length*** for the username, email, and password hash, so that the input doesn't overflow the maximum string length in the table.
- ***Regex***, only for the email.
- ***Uniqueness***, only for the username. No 2 usernames in the table can be the same.