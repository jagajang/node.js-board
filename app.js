const express = require('express');

// router
const app = express();
const postRouter = require('./routes/post');

// databases
const db = require('./db');

// public 폴더 설정
app.use(express.static(__dirname+'\\public'));

// pug view engine 설정
app.set('views', __dirname+'/views');
app.set('view engine', 'pug');


app.use('/post', postRouter);

// db 콜백 func -> 비동기처리로 변경 필요
// 아래 링크 확인
// https://ms3864.tistory.com/26
app.get('/', (req, res) => {
    let posts = {};

    // 게시글 정보 전달
    let qry = `select idx, title, author, DATE_FORMAT(writeTime, '%y/%m/%d') as day from posts order by idx desc`;
    
    db.query(qry, (error, result, fields) => {
        if(error) {
            console.log('failed to get posts');
            console.log(error);
        }
        else {
            posts = result;
        }

        // 페이지 렌더링
        res.render('index', { title: '게시판', data: posts});
    });
});

app.use('/home', (req, res) => {
    res.redirect('/');
});

app.listen(8080, () => {
    console.log('server running on localhost:8080');
});