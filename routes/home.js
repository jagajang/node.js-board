const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    let posts = {};

    // 게시글 정보 전달
    const q1 = new Promise((resolve, reject) => {
        let qry = `select idx, title, author, DATE_FORMAT(writeTime, '%y/%m/%d') as day from posts order by idx desc`;

        db.query(qry, (error, result, fields) => {
            if(error) {
                console.log('failed to get posts');
                reject(error);
            }
            else {
                resolve(result);
            }
        });    
    });

    q1.then((result) => {
        res.render('index', { title: '게시판', data: result});
    }).catch((error) => {
        console.log(error);
    });
});

module.exports = router;