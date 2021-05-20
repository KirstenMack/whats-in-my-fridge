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
                    const missingIngredients = []
                    response.data[i].missedIngredients.forEach((element) => {
                        missingIngredients.push(element.name);
                    })
                    console.log(missingIngredients);
                    const recipe = {
                        recipeId: id,
                        name: title,
                        image: image,
                        missingIngredients: missingIngredients,
                        description: null
                    };
                    recipes.push(recipe);
                }
                if(recipes.length === 0) {
                    throw new Error('No search results')
                    return
                }
                res.render('index',{recipeListResults: recipes})
            })
            .catch((e) => {
               res.status(404).send({error: "Could not find recipe results: " + e});
            })
};

exports.searchDetails = async function(req, res) {
    console.log("In controller")
    const id = req.params.id;
    console.log(id);
    if(!!id) {
        try {
            let description = await spoonacular.summaryRequest(id);
            console.log(description.data['summary'])
            res.status(200).json({desc: description.data['summary']})
        } catch (e){
            res.status(404).send({error: "Could not find recipe description: " + e});
        }
    }
};