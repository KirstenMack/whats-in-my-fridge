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
                        recipeId: id,
                        name: title,
                        image: image,
                        description: null
                    };
                    recipes.push(recipe);
                }
                res.render('index', {recipeListResults: recipes})
            })
            .catch(() => {
                console.error;
            })
};

exports.searchDetails = async function(req, res) {
    console.log("In controller")
    const id = req.params.id;
    console.log(id);
    if(!!id) {
        let description = await spoonacular.summaryRequest(id);
        console.log(description.data['summary'])
        res.status(200).json({desc: description.data['summary']})
    }
};