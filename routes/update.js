var express = require('express');
var router = express.Router();
var connection = require('../lib/db');
const Sequelize = require('sequelize');
const project = require('../models').project;

router.post('/', function(req, res, next) {

	project.update({
             name: req.body.name,
             description: req.body.description,
             manager: req.body.manager,
             assigned: req.body.assigned,
             status: req.body.status,
	}, {
	  where: { id: req.body.id },
	  returning: true,
	  plain: true
	})
	.then(r => res.send("Editado"))

});

module.exports = router;