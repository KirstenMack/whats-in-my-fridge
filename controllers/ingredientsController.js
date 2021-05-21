"use strict";
const IngredientsDAO = require("../dao/ingredientsDAO");
const dao = IngredientsDAO.getInstance();

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

exports.update = async function (req, res) {};

exports.delete = async function (req, res) {};

exports.use = async function (req, res) {};
