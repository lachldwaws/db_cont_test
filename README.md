# 2-Container Database Backend

This is a simple test project to practise management of multiple containers. There are 2 interdependent services.

## The Database

The **database** runs on MySQL and contains 1 table: `users`, with the following schema:
- `id` - Integer, primary key, automatically generated.
- `username` - Varchar(64). Not null, must be unique.
- `email` - Varchar(254). This is an erratum to the RFC 3696 standard.
- `password_hash` - Varchar(60). Bcrypt output hashes are always 60 characters in length.

## The Server

The **server** is just a simple abstraction layer as a  Node.js project. It sits in front of the database, exposing CRUD operations and performing input verification on create & update requests before inserting into the database.

The 4 operatiations are *create* (Adding a new user), *read* (Get a user's information), *update* (Change a user's information), and *delete* (remove a user).

 Most verification includes:
- ***Input Length*** for the username, email, and password hash, so that the input doesn't overflow the maximum string length in the table.
- ***Regex***, only for the email.
- ***Uniqueness***, only for the username. No 2 usernames in the table can be the same.

## Resources

- [A StackOverflow question on email lengths.](https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address)
- [Variable substitution in a docker-compose file.](https://docs.docker.com/compose/compose-file/compose-file-v3/#variable-substitution)
- [isemail - A Node.js email address validation library.](https://www.npmjs.com/package/isemail)
- [The MySQL Docker Hub documentation.](https://hub.docker.com/_/mysql)
- [Unit testing an Express.js application.](https://alexanderpaterson.com/posts/how-to-start-unit-testing-your-express-apps)
- [The Docker-Compose file reference.](https://github.com/compose-spec/compose-spec/blob/master/spec.md)