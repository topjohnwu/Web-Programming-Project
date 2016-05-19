const Router = require('express').Router;
const router = new Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const Users = require('../data/Users.json');
const Posts = require('../data/Posts.json');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.post('/login/', function(req, res) {
  let user = 0;
  for(let i = 0; i < Users.length; ++i) {
    if(Users[i].name === req.body.username) {
      if(Users[i].password === req.body.password) {
        user = i;
        break;
      }
    }
  }
  if(user)
    res.json(Users[user]);
  else
    res.json(null);
});

router.get('/users/', function(req, res) {
  res.json(Users);
});

router.get('/users/:id', function(req, res, next) {
  if(req.params.id < 0 || req.params.id >= Users.length) {
    var err = new Error();
    err.status = 404;
    err.message = 'This id doesn\'t exist'
    next(err);
  }
  else res.json(Users[req.params.id]);
});

router.get('/posts/', function(req, res) {
  res.json(Posts);
});

router.post('/posts/', function(req, res) {
  req.body.id = Posts.length;
  Posts.push(req.body);
  fs.writeFile('./data/Posts.json', JSON.stringify(Posts), (err) => {
    if (err) throw err;
    console.log('Posts saved to Post.json!');
  });
  res.json(true);
});

router.use(function(err, req, res, next) {
  console.log("error occurs: " + err.message);
  res.status(err.status || 500);
  res.send(err);
});

module.exports = router;
