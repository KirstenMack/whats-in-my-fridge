const express = require('express');
const router = express.Router();
const contents = require('../contents');
const ingredientsRouter= require('../routes/ingredients');
const spoonacular = require('../api/spoonacular')
const ingredientController = require("../controllers/ingredientController");

/* GET home page. */
// router.get('/', function(req, res, next) {
//         res.render('index', {
//             title: 'Whats in my fridge?',
//         contents});
// });

// router.get('/:id', ingredientController.find);

router.post('/addIngredient', ingredientController.insert);

router.get('/', ingredientController.view);

router.post('/:id',ingredientController.delete)

router.get('/login', (req, res) => {
    res.render("login")
});


module.exports = router;
