"use strict";
const IngredientsDAO = require("../dao/ingredientsDAO");
const dao = IngredientsDAO.getInstance();
const sessionHandler = require("../controllers/sessionController");

exports.save = async (req, res) => {
  const user = req.session.authID;
  const { title, description, units } = req.body;
  try {
    const response = await dao.insertIngredient(
      title,
      description,
      units,
      user
    );
    res.status(200).render('index',{Message: "Ingredient added!"})
  } catch (e) {
    console.log(e);
  }
};

exports.fetchAll = async (req, res) => {

  try {
    const user = req.session.authID;
    const authenticated = sessionHandler.authenticateUser(user);
    const ingredients = [];
    if (authenticated) {
      await dao.findIngredientsByUser(user).then((result) => {
        for (var i = 0; i < result.length; i++) {
          const id = result[i].id;
          const title = result[i].title;
          const description = result[i].description;
          const units = result[i].units;
          //To Make Module
          const ingredient = {
            id: id,
            title: title,
            description: description,
            units: units,
          };
          ingredients.push(ingredient);
        }
      });
    }
    const jsonObject = JSON.stringify(ingredients);
    res.render('index',{ingredientsList: ingredients});
  } catch (err) {
    console.log(err);
  }
};

exports.update = function (req, res) {};

exports.delete = function (req, res) {};

exports.use = function (req, res) {};
