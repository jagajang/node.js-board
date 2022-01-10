# node.js로 게시판 만들기

이것저것 구글링 해보며 직접 만들고 있습니다.


## 추가 기능

### 작성자
[ ] (로그인 & 회원가입 후) 작성자에 유저 id

### 글 제거
[ ] 비밀번호 입력 시 글 삭제
[ ] (로그인 & 회원가입 후) 사용자 정보로 제거

### 인덱싱
[X] DB에 이전/다음 idx 추가 및 해당 정보로 이전/다음글 이동
[ ] (글 제거 후) 메인 페이지에 번호 인덱싱 방법 변경

## 로그인 & 회원가입
[ ] 로그인 & 회원가입
[ ] 본인 게시글 확인

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