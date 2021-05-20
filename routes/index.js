const express = require("express");
const router = express.Router();
const IngredientsDAO = require("../dao/ingredientsDAO");
const dao = IngredientsDAO.getInstance();
const sessionHandler = require("../controllers/sessionController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Whats in my fridge?",
    user: req.session.authID,
    ingredientsList: findIngredientsByUser(req.session.authID),
  });
});

router.get("/login", (req, res) => {
  res.render("login", {
    title: "Login",
  });
});

async function findIngredientsByUser(user) {
  try {
    const authenticated = sessionHandler.authenticateUser(user);
    const ingredients = [];
    // if (authenticated) {
    //   await dao.findIngredientsByUser(user).then((result) => {
    //     for (var i = 0; i < result.length; i++) {
    //       const id = result[i].id;
    //       const title = result[i].title;
    //       const description = result[i].description;
    //       const units = result[i].units;
    //       //To Make Module
    //       const ingredient = {
    //         id: id,
    //         title: title,
    //         description: description,
    //         units: units,
    //       };
    //       ingredients.push(ingredient);
    //     }
    //   });
    // }
    // const jsonObject = JSON.stringify(ingredients);
    return ingredients;
  } catch (err) {
    console.log(err);
  }
}

module.exports = router;
