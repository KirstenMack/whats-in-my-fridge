const google = require("../api/google");

const verified = (token) => {
  google
    .verify(token)
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

const authenticateUser = (user) => {
  if (user !== undefined && user.id !== null) return true;
  else return false;
};

module.exports = { verified, authenticateUser };
