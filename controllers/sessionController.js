const google = require("../api/google");
var user;

const verified = (token) => {
  google
    .verify(token)
    .then(() => {
      return true;
    })
    .catch(() => {
      console.error;
      return false;
    });
};

const authenticateUser = (req) => {
  user = req.session.authID;
  if (user !== undefined && user.id !== null) return true;
  else return false;
};

module.exports = { verified, authenticateUser };
