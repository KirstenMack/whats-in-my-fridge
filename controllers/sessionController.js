const google = require("../api/google");
var instance = null;

class SessionHandler {
  static getInstance() {
    return instance ? instance : new SessionHandler();
  }

  verifyUser(token) {
    google
      .verify(token)
      .then(() => {
        return true;
      })
      .catch(() => {
        console.error;
        return false;
      });
  }

  authenticateUser(req) {
    const user = req.session.authID;
    if (user !== undefined && user.id !== null) return true;
    else return false;
  }

}

module.exports = SessionHandler;
