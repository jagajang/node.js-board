const express = require('express');

// router
const app = express();

// databases
const db = require('./db');
const { password } = require('./private/mysql_id');

// public 폴더 설정
app.use(express.static(__dirname+'\\public'));

// pug view engine 설정
app.set('views', __dirname+'/views');
app.set('view engine', 'pug');

app.get('/home', (req, res) => {
    res.redirect('/');
})
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

app.get('/post/:idx', (req, res) => {
    let idx = req.params.idx;
    let post = {};

    let qry = `select idx, title, author, DATE_FORMAT(writeTime, '%y/%m/%d') as day, content from posts where idx='${idx}'`;
    db.query(qry, (error, result, fields) => {
        if(error) {
            console.log(`failed to get post ${idx}`);
            console.log(error);
        }
        else {
            post = result;
        }

        console.log(post);

        // 페이지 렌더링
        res.render('post', {title: '게시글', data: post[0]});
    });
});

app.listen(8080, () => {
    console.log('server running on localhost:8080');
});