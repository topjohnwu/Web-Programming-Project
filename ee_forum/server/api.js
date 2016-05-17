const Router = require('express').Router;
const router = new Router();
const {Users, Posts} = require('../src/Data');


router.get('/users/', function(req, res) {
  res.json(Users);
});

router.get('/users/:id', function(req, res, next) {
  if(req.params.id < 0 || req.params.id > Users.length) {
    var err = new Error();
    err.status = 404;
    err.message = 'This id doesn\'t exist'
    next(err);
  }
  else res.json(Users[req.params.id - 1]);
});

router.get('/posts/', function(req, res) {
  res.json(Posts);
});

router.use(function(err, req, res, next) {
  console.log("error occurs: " + err.message);
  res.status(err.status || 500);
  res.send(err);
});

module.exports = router;
