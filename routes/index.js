var express = require('express');
var router = express.Router();

const spoonacular = require('../src/spoonacular')

/* GET home page. */
router.get('/', function(req, res, next) {

  spoonacular.searchRequest(
      'cheesecake',
      1,
      1
  ).then((response) => {
    let result = response.data.results[0].title;
    console.log(result);
    res.render('index', {
        title: 'Express',
        response: result});
    });
});


module.exports = router;
