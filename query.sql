create table posts(
    idx INT not null PRIMARY KEY,
    title VARCHAR(30) not null,
    author VARCHAR(30) not null,
    writeTime DATETIME not null,
    content TEXT not null,
    passwd VARCHAR(30) not null
);