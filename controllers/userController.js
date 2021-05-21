"use strict-dynamic";
const google = require("../api/google");
const UsersDAO = require("../dao/usersDAO");
const dao = UsersDAO.getInstance();

exports.signin = (req, res) => {
  const { name, email, token } = req.body;
  google
    .verify(token)
    .then(async () => {
      let user = await dao.findUserByEmail(email);
      if (user === undefined) user = await dao.insertUser(name, email);
      req.session.authID = user;
      res.cookie("auth-token", token);
      res.status(200).send({ message: "User Authenticated!" });
    })
    .catch((e) => {
      res.status(401).send({ error: "User not authenticated: " + e });
      console.log(e);
    });
};

exports.signout = (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie("auth-token");
    res.clearCookie("connect.sid");
    res.status(200).send({ message: "User Signed out" });
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: "Error: " + e });
  }
};
