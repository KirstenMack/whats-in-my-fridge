'use strict'

const spoonacular = require('../api/spoonacular')
const axios = require("axios");

exports.search = async function(req, res) {
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
            .catch(() => {
                console.error;
            })
};