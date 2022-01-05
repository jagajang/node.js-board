const express = require('express');
const router = express.Router();
const db = require('../db');

// Promise 비동기 처리
router.get('/:idx', (req, res) => {
    let idx = req.params.idx;
    let post = {};

    // promise 함수 생성
    const q1 = () => {
        return new Promise((resolve, reject) => {
            let qry = `select idx, title, author, DATE_FORMAT(writeTime, '%y/%m/%d') as day, content from posts where idx='${idx}'`;

            db.query(qry, (error, result, fields) => {
                if(error) {
                    console.log(`failed to get post ${idx}`);
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        });
    }

    q1().then((result) => {
        res.render('post', {title: '게시글', data: result[0]});
    }).catch((error) => {
        console.log(error);
    });
});

/* 콜백함수 이용(원본)
router.get('/post/:idx', (req, res) => {
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

        // 페이지 렌더링
        res.render('post', {title: '게시글', data: post[0]});
    });
});
*/

module.exports = router;