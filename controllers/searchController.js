'use strict'

const spoonacular = require('../api/spoonacular')

exports.search = function(req, res) {
    try {
        console.log(res.sesssion.user);
        console.log(res.sesssion.authToken);
        const searchTerm = req.body.Ingredients;
        spoonacular.searchRequest(searchTerm)
            .then((response) => {
            if (response.data.length > 0) {
                const result = response.data[0].title;
                const image = response.data[0].image;
                console.log(result);
                res.render('index', {
                    response: result,
                    image: image
                });
            }
            else {
                res.render('index', {
                    response: 'No matching result'
                });
            }
        });
    } catch (err) {
        console.log(err)
    }
};