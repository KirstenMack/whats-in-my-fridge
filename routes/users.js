const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

/* GET home page. */
router.post("/signin", userController.signin);
router.post("/signout", userController.signout);


module.exports = router;
