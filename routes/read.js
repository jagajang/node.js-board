const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/:idx', (req, res) => {
    let idx = req.params.idx;

    const query1 = `select idx, title, author, DATE_FORMAT(writeTime, '%y/%m/%d') as day, content from posts where idx='${idx}'`;
    const query2 = "select count(*) as cnt from posts";

    db.askQuery(query1+";"+query2).then((result) => {
        res.render('read', { data: result[0][0], cnt: result[1][0].cnt});
    }).catch((error) => {
        console.log(error);
    });
});

module.exports = router;