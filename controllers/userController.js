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
      res.cookie("auth-token", token);
      res.status(200).send("User authenticated!");
      // TODO: Create and use Session, will go up in next PR
      //req.session.authID = await bcrypt.hash(user.id + "", 10);
      console.log("Session Created: " + req.session.authID);
    })
    .catch(() => {
      console.error;
    });
};

