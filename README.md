# node.js로 게시판 만들기

이것저것 구글링 해보며 직접 만들고 있습니다.


## 추가 기능

### 작성자
비로그인 시 작성자 이름 입력 기능 추가
로그인 & 회원가입 기능 구현 후 개선

### 글 제거
비밀번호 입력 시 글 삭제 기능 추가
로그인 & 회원가입 기능 구현 후 개선

### 번호
현재 이전글/다음글 이동 시 idx +- 1로 이동
DB에 이전글/다음글 idx 추가 및 해당 정보로 페이지 이동

## 로그인 & 회원가입
로그인 & 회원가입 기능 구현
마이페이지 기능 구현

## private 폴더

### private/mysql_id.js
```js
module.exports = {
    host : 'localhost',
    user : 'mysql ID',
    password : 'mysql PASSWORD',
    database : 'board',
    multipleStatements: true
};
```