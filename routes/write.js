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
    const query1 = `update posts set nex_idx=idx+1 where idx=(select max(idx) from posts);`
    const query2 = `insert into posts(idx, title, author, writeTime, content, passwd, pre_idx)
        select max(idx)+1, "${req.body.postTitle}", "익명", "${printTime()}", "${req.body.content}", "${req.body.passwd}", max(idx) from posts;`;
    
    db.askQuery(query1+query2).then(() => {
        res.redirect('/');
    }).catch((error) => {
        console.log(error);
    });
});

module.exports = router;