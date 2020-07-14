DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

create table burger
(
    id integer
    auto_increment NOT NULL,
burger_name VARCHAR
    (255),
devoured boolean,
PRIMARY key
    (id)


);
