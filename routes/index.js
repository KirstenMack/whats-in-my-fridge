const express = require('express');
const router = express.Router();
const contents = require('../contents');
const ingredientsRouter= require('../routes/ingredients');
const spoonacular = require('../api/spoonacular')
const ingredientController = require("../controllers/ingredientController");

/* GET home page. */
router.get('/', function(req, res, next) {
        res.render('index', {
            title: 'Whats in my fridge?',
        contents:ingredientsRouter.contents});
});

router.get('/login', (req, res) => {
    res.render("login")
});

router.get('/view/ingredient', ingredientController.view);

module.exports = router;
