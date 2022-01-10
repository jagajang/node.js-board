const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    const query1 = `set @rownum:=0;`
    const query2 = 'select @rownum:=@rownum+1 as rownum, idx, title, author, DATE_FORMAT(writeTime, \'%y/%m/%d\') as day from posts order by idx desc;';

    db.askQuery(query1+query2).then((result) => {
        res.render('home', { data: result[1]});
    }).catch((error) => {
        console.log(error);
    });
});

module.exports = router;