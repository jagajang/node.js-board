create database board;
use board;

create table posts(
    idx INT not null AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) not null,
    author VARCHAR(30) not null,
    writeTime DATETIME not null,
    content TEXT not null,
    passwd VARCHAR(30) not null
);