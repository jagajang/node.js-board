const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    const query = 'select idx, title, author, DATE_FORMAT(writeTime, \'%y/%m/%d\') as day from posts order by idx desc';

    db.askQuery(query).then((result) => {
        res.render('index', { title: '게시판', data: result});
    }).catch((error) => {
        console.log(error);
    });
});

module.exports = router;