var express = require('express');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var path = require('path');
var app = express();
var router = express.Router();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'nunjucks');
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
    next();
});

router.get('/api/query', function(req, res, next){
    res.json(req.query);
    next();
});

app.use('/', router);

app.listen(3000);