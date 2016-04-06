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

router.post('/api/body', function(req, res, next) {
  res.json(req.body);
  next();
});

router.get('/api/user/:id', function(req, res, next){
    if(Number(req.params.id) === 1) {
        var joe = {id: 1, name: "Joe", age: 18};
        res.json(joe);
    }
    else if(Number(req.params.id) === 2) {
        var john = {id: 2, name: "John", age: 22};
        res.json(john);
    }
});

router.use('/static', express.static('public'));

app.use('/', router);

app.listen(3000);