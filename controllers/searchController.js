'use strict'

const spoonacular = require('../api/spoonacular')
const axios = require("axios");

exports.search = async function(req, res) {
    try {
        var recipes = []
        const searchTerm = req.body.Ingredients;
        var response = await spoonacular.searchRequest(searchTerm).then( async function (response) {
            for( var i = 0; i < response.data.length; i++){
                var id = response.data[i].id;
                var title = response.data[i].title;
                var image = response.data[i].image;
                var descripResponse = await spoonacular.summaryRequest(id);
                var recipe = {
                    "id": id,
                    "title": title,
                    "image": image,
                    "description": descripResponse
                };
                recipes.push(recipe);
            }
        })
            .then(function () {
                console.log( recipes['description'])
                res.render('index', {
                    name: recipes['title'],
                    image: recipes['image'],
                    description: recipes['description']
                });
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