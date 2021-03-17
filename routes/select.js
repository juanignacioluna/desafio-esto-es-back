var express = require('express');
var router = express.Router();
var connection = require('../lib/db');
const Sequelize = require('sequelize');
const project = require('../models').project;

router.get('/', function(req, res, next) {

    project.findAll({})
        .then(project => res.send(project))

});


module.exports = router;
