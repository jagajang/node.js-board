const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/:idx', (req, res) => {
    let idx = req.params.idx;

    const query1 = `select idx, title, author, DATE_FORMAT(writeTime, '%y/%m/%d') as day, content from posts where idx='${idx}'`;
    const query2 = "select count(*) from posts";

    
    db.askQuery(query1).then((result1) => {
        res.render('post', {title: '게시글', data: result1[0]});
    }).catch((error) => {
        console.log(error);
    });
});

module.exports = router;