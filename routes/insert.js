var express = require('express');
var router = express.Router();
var connection = require('../lib/db');
const Sequelize = require('sequelize');
const project = require('../models').project;

router.post('/', function(req, res, next) {

    project.create ({
             name: req.body.name,
             description: req.body.description,
             manager: req.body.manager,
             assigned: req.body.assigned,
             status: req.body.status,
	})
	.then(usuario => res.send(usuario))


});


module.exports = router;