const express = require('express');
const db = require('../db');
var controller = require('../controller/user.controller');

const router = express.Router(); 

//GET [/users/index]
router.get('/',controller.index);

//GET [/users/search]
router.get('/search',controller.search);

//GET [/users/create]
router.get('/create', controller.create);

//GET [/users/:id]
router.get('/:id', controller.get);

//POST [/users/create]
router.post('/create', controller.PostCreate);

module.exports = router;
