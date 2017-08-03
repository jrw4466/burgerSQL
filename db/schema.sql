CREATE DATABASE burgersSQL_db;

USE burgersSQL_db;

CREATE TABLE burgers 
(	id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT False,
    date TIMESTAMP,
    PRIMARY KEY (id)
);
    
