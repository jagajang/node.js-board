const express = require('express');
const app = express();

// router
const homeRouter = require('./routes/home');
const postRouter = require('./routes/post');

// public 폴더 설정
app.use(express.static(__dirname+'\\public'));

// pug view engine 설정
app.set('views', __dirname+'/views');
app.set('view engine', 'pug');

// routing
app.use('/', homeRouter);
app.use('/home', (req, res) => { res.redirect('/'); });
app.use('/post', postRouter);

app.listen(8080, () => {
    console.log('server running on localhost:8080');
});