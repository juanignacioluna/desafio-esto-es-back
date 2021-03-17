var express = require('express');
var router = express.Router();
var connection = require('../lib/db');
const Sequelize = require('sequelize');
const project = require('../models').project;

router.delete('/', function(req, res, next) {

	project.destroy({
	    where: {
	        id: req.body.id,
	    }
	})
	.then(r => res.send("Eliminado"))

});


module.exports = router;