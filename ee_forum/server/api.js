const Router = require('express').Router;
const router = new Router();
const {Users, Posts} = require('../src/Data');


router.get('/users/'), function(req, res, next) {
  res.json(Users);
}
router.get('/users/:id', function(req, res, next) {
  if(req.params.id < 0 || req.params.id > Users.length) {
    var err = new Error();
    err.status = 404;
    err.message = 'This id doesn\'t exist'
    next(err);
  }
  else res.json(Users[req.params.id - 1]);
});

router.get('/posts/', function(req, res, next) {
  res.json(Posts);
});

// router.get('/users/:username', function(req, res, next) {
//  let index = -1;
//  for (let i = 0; i < users.length; ++i) {
//    if (req.params.username === users[i].name) {
//      console.log(users[i]);
//      index = i;
//      break;
//    }
//  }
//  if(index !== -1) {
//    res.json(users[index]);
//  }
//  else {
//    var err = new Error();
//    err.status = 404;
//    err.message = "No such user with username: " + req.params.username;
//    next(err);
//  }
// });

router.use(function(err, req, res, next) {
  console.log("error occurs: " + err.message);
  res.status(err.status || 500);
  res.send(err);
});

module.exports = router;
