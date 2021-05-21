const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Whats in my fridge?",
    user: req.session.authID,
  });
});

router.get("/login", (req, res) => {
  res.render("login", {
    title: "Login",
  });
});


module.exports = router;
