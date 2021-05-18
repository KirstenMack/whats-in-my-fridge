const google = require("../api/google");
const UsersDAO = require("../dao/usersDAO");
const dao = UsersDAO.getInstance();

exports.login = (req, res) => {
  const { name, email, token } = req.body;
  google
    .verify(token)
    .then(async () => {
      let user = await dao.findUserByEmail(email);
      if (user === undefined) user = await dao.insertUser(name, email);
      req.session.authID = user;
      res.cookie("auth-token", token);
      return res.status(200).redirect("/");
    })
    .catch(() => {
      console.error;
    });
};

