DROP DATABASE IF EXISTS website;
CREATE DATABASE website;
USE website;

CREATE TABLE users(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(64) NOT NULL UNIQUE,
    email VARCHAR(254),
    password_hash CHAR(60) NOT NULL
);

-- Stick some sample data in there yeah yeah

INSERT INTO users(username, email, password_hash) VALUES (
	'awesomeuser123',
    'awesomeuser@awesomedomain.com',
    '$2a$12$R9h/cIPz0gi.URNNX3kh2OPST9/PgBkqquzi.Ss7KIUgO2t0jWMUW' -- This is just a test hash.
),
(
	'anotheruser456',
    'thisguysucks@baddomain.lol',
    '$2a$12$R9h/cIPz0gi.URNN83kh2OPST9/PgBkqquzi/Ss7KIPgO2t0jWMUW' -- This is just a test hash.
);