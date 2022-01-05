const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    res.render('write', {title: '글쓰기'});
});

router.post('/', (req, res) => {
    console.log(req);
    console.log("title: "+req.body.title);
    console.log("passwd: "+req.body.passwd);
    console.log("content: "+req.body.content);
    
    res.redirect('/');
});

module.exports = router;