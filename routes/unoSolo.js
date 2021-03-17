var express = require('express');
var router = express.Router();
var connection = require('../lib/db');
const Sequelize = require('sequelize');
const project = require('../models').project;

router.get('/:id', function(req, res, next) {

    project.findAll({
         where: {
             id: req.params.id,
         }
     })
     .then(project => res.json(project[0]))

});


module.exports = router;
