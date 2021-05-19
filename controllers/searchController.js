'use strict'

const spoonacular = require('../api/spoonacular')
const axios = require("axios");

exports.search = async function(req, res) {
    try {
        const searchTerm = req.body.Ingredients;
        spoonacular.searchRequest(searchTerm)
            .then( async function (response) {
                const recipes = []
                for( var i = 0; i < response.data.length; i++){
                    const id = response.data[i].id;
                    const title = response.data[i].title;
                    const image = response.data[i].image;
                    const recipe = {
                        "id": id,
                        "title": title,
                        "image": image,
                        "description": null
                    };
                    recipes.push(recipe);
                }
                return recipes
            })
            .then(async function (recipes){
                for (const item of recipes) {
                   let description = await spoonacular.summaryRequest(item.id);
                   item.description = description.data['summary'];
                }
                return recipes
            })
            .then(function (recipes) {
                console.log( recipes[0]['description'])
                res.render('index', {
                    name: recipes[0]['title'],
                    image: recipes[0]['image'],
                    description: recipes[0]['description']
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