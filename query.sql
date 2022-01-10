create database board;
use board;

-- 게시글 데이터
create table posts(
    idx INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    author VARCHAR(30) NOT NULL,
    writeTime DATETIME NOT NULL,
    content TEXT NOT NULL,
    passwd VARCHAR(30) NOT NULL,

    pre_idx INT,
    nex_idx INT,

    PRIMARY KEY ( idx )
);

-- 사용자 데이터
create table users(
    id VARCHAR(20) NOT NULL,
    passwd VARCHAR(50) NOT NULL,

    primary key (id)
);