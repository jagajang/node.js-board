const express = require('express');
const app = express();

// router
const homeRouter = require('./routes/home');
const readRouter = require('./routes/read');
const writeRouter = require('./routes/write');
// public 폴더 설정
app.use(express.static(__dirname+'\\public'));

// pug view engine 설정
app.set('views', __dirname+'/views');
app.set('view engine', 'pug');

// body-parser 적용
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// routing
app.use('/', homeRouter);
app.use('/home', (req, res) => { res.redirect('/'); });

app.use('/read', readRouter);

app.use('/write', writeRouter);

app.listen(8080, () => {
    console.log('server running on localhost:8080');
});