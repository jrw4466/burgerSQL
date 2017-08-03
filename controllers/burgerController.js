var express = require("express");
var router = express.Router();

// Import the model (burgers.js) to use its database functions
var db = require("../models");

// Create all our routes and set up logic within those routes where required
module.exports = function(app) {

router.get("/", function(req, res) {
	db.Burger.findAll(req.body).then(function(dbBurgers) {
		var data = res.json(dbBurgers);
		console.log(data);
		res.render("index", data);
	});
});

router.post("/", function(req, res) {
	db.Burger.create(req.body).then(function(dbBurgers) {
		res.json(dbBurgers);
		res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
	db.Burger.update({
		where: {
			id: req.params.id
		},
	}).then(function(dbBurgers) {
		res.json(dbBurgers);
		res.redirect("/");
	});
});

};

// Export routes for server.js to use
module.exports = router;
//module.exports = db;