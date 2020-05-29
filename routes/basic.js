var express = require('express');
var academy = require('../controllers/basic/academy');

var router = express.Router();

router.post('/academy/list', academy.list); 
router.post('/academy/add', academy.add); 

module.exports = router;

