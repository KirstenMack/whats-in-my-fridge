const google = require("../api/google");
const UsersDAO = require("../dao/usersDAO");
const dao = UsersDAO.getInstance();

exports.login = (req, res) => {
  const { name, email, token } = req.body;
  google.verify(token)
    .then(async () => {
      let user = await dao.findUserByEmail(email);
      if (user === undefined) user =  await dao.insertUser(name, email);
      res.cookie("auth-token", token);
      res.status(200).send("User authenticated!");
      res.send("index");

    })
    .catch(() => {
      res.status(401).send("User not authenticated!");
      res.send("index");
      console.error;
    });
};
