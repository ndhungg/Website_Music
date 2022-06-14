const express = require("express");
const db = require("../db");
var controller = require("../controller/user.controller");
var validation = require("../validations/user.validation");

const router = express.Router();

//GET [/users/index]
router.get("/", controller.index);

//[GET] /cookie
router.get("/cookie", function (req, res, next) {
  res.cookie("user-id", 12345);
  res.send("Hello");
});

//GET [/users/search]
router.get("/search", controller.search);

//GET [/users/create]
router.get("/create", controller.create);

//GET [/users/:id]
router.get("/:id", controller.get);

//POST [/users/create]
router.post("/create", validation.PostCreate, controller.PostCreate);

module.exports = router;
