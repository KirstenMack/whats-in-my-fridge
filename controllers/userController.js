const google = require("../api/google");
const { validateUser } = require("../dao/usersDAO");



exports.login = (req, res) => {
  const {name, email, token } = req.body;
  google.verify(token)
    .then(() => {
      validateUser(name, email);
      res.cookie("auth-token", token);
      res.status(200).send("User authenticated!");
      res.render("/index");
    })
    .catch( () => {
        res.status(401).send("User not authenticated!");
        console.error;
    });
};



