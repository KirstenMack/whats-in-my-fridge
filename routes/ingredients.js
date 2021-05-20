const express = require('express');
const router = express.Router();
const ingredientController = require('../controllers/ingredientController');


router.get('/view', ingredientController.view);
console.log("hey")
module.exports = router;