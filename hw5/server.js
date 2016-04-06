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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
    next();
});

router.get('/api/query', function(req, res, next){
    res.json(req.query);
    next();
});

router.post('/api/body', function(req, res) {
  res.json(req.body);
});

app.use('/', router);

app.listen(3000);