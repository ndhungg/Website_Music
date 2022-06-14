const express = require("express");
const db = require("../db");
var controller = require("../controller/auth.controller");

const router = express.Router();


//GET [/auth/login]
router.get("/login", controller.login);

//POST [/auth/login]
router.post("/login", controller.postLogin);

module.exports = router;
