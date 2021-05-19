'use strict'

const spoonacular = require('../api/spoonacular')
const axios = require("axios");

exports.search = function(req, res) {
    try {
        const searchTerm = req.body.Ingredients;
        spoonacular.searchRequest(searchTerm)
            .then(response => {
                    var recipes = []
                    for( var i = 0; i < response.data.length; i++){
                        var id = response.data[i].id;
                        spoonacular.summaryRequest(id)
                            .then( description => {
                                console.log(description.data[0])
                                // var recipe = {
                                //     "id": id,
                                //     "title": response.data[i].title,
                                //     "image": response.data[i].image,
                                //     "description": description
                                // };
                                // recipes.push(recipe);
                            })
                    }
                    // return recipes
                })
            // .then((response) => {
            // if (response.length > 0) {
            //     const title = response[0].title;
            //     const image = response[0].image;
            //     const description = response[0].description;
            //     console.log(description);
            //     res.render('index', {
            //         name: title,
            //         image: image,
            //         // description: summary
            //     });
            // }
            // else {
            //     res.render('index', {
            //         name: 'No matching result'
            //     });
            // }
        // });
    } catch (err) {
        console.log(err)
    }
};