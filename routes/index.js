const express = require('express');
const router = express.Router();

const spoonacular = require('../api/spoonacular')

/* GET home page. */
router.get('/', function(req, res, next) {
        res.render('index', {
            title: 'Whats in my fridge?'});
});

router.get('/login', (req, res) => {
    res.render("login")
});



module.exports = router;
