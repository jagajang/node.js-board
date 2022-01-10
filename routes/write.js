const express = require('express');
const router = express.Router();
const db = require('../db');

const printTime = () => {
    return new Date(new Date() + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/, '');
};

router.get('/', (req, res) => {
    res.render('write', {title: '글쓰기'});
});

router.post('/', (req, res) => {
    const query = `insert into posts(title, author, writeTime, content, passwd)
        values("${req.body.postTitle}", "somebody", "${printTime()}", "${req.body.content}", "${req.body.passwd}")`;
    
    db.askQuery(query).then(() => {
        res.redirect('/');
    }).catch((error) => {
        console.log(error);
    });
});

module.exports = router;