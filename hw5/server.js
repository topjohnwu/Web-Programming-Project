var express = require('express');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var path = require('path');
var app = express();
var router = express.Router();

function genError(status, message){
    var err = new Error();
    err.status = status;
    err.message = message;
    return err;
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'nunjucks');
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/api/query', function(req, res, next){
    res.json(req.query);
});

router.post('/api/body', function(req, res, next) {
    res.json(req.body);
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
    else next(genError(404, "ID: " + req.params.id + " not found!"));
});

router.use('/static', express.static('public'));

router.use(function(req, res, next){
    next(genError(404, "Page not found!!"));
});

app.use('/', router);

app.use(function(err, req, res, next){
    res.status(err.status).render('error', {
        error: err.status,
        message: err.message
    });
});

app.listen(3000);