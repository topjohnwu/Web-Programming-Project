const Router = require('express').Router;
const router = new Router();

users = [
	{ name: 'John', age: 23 },
	{ name: 'Amy', age: 18 },
]

router.get('/users/', function(req, res) {
	res.json(users);
});

router.get('/users/:username', function(req, res, next) {
	let index = -1;
	for (let i = 0; i < users.length; ++i) {
		if (req.params.username === users[i].name) {
			console.log(users[i]);
			index = i;
			break;
		}
	}
	if(index !== -1) {
		res.json(users[index]);
	}
	else {
		var err = new Error();
		err.status = 404;
		err.message = "No such user with username: " + req.params.username;
		next(err);
	}
});

router.use(function(err, req, res, next) {
	console.log("error occurs: " + err.message);
	res.status(err.status || 500);
	res.send(err);
});

module.exports = router;
