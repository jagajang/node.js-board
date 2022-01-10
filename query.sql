create database board;
use board;

create table posts(
    idx INT not null AUTO_INCREMENT,
    title VARCHAR(50) not null,
    author VARCHAR(30) not null,
    writeTime DATETIME not null,
    content TEXT not null,
    passwd VARCHAR(30) not null,

    pre_idx INT,
    nex_idx INT,

    PRIMARY KEY ( idx )
);