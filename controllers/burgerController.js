// var express = require('express');
// // Require the sequelize-router middleware and any models to be used 
// var sequelizeRouter = require('sequelize-router');
// var db = require('../models');
 
// var app = express();
// // Use the sequelize-router middleware as shown below 
// app.use('/api', sequelizeRouter(db.Burger)); 

var express = require("express");
var router = express.Router();

// Import the model (burgers.js) to use its database functions
var db = require("../models");
//db.sequelize.sync();

// Create all our routes and set up logic within those routes where required
//module.exports = function(app) {

router.get("/", function(req, res) {
	db.Burger.findAll(req.body).then(function(results) {
		var data = {
			burgers: results
		};
		res.render("index", data);
	});
});

router.post("/", function(req, res) {
	db.Burger.create(
		req.body
	).then(function(results) {
		res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
	db.Burger.update(
		req.body,
		{ where: {
			id: req.params.id
		}
	}).then(function(results) {
		res.redirect("/");
	});
});

//};

// Export routes for server.js to use
module.exports = router;
//module.exports = db;