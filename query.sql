-- 사용하는 mysql 테이블 구조는 다음과 같습니다.

create table posts(
    idx INT not null PRIMARY KEY,
    title VARCHAR(30) not null,
    author VARCHAR(30) not null,
    writeTime DATETIME not null,
    content TEXT not null,
    passwd VARCHAR(30) not null
);