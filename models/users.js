class Users {
  constructor(result) {
    this.id = result[0].id;
    this.firstName = result[0].first_name;
    this.lastName =  result[0].last_name;
    this.email = result[0].email;
  }

};


module.exports = {
  Users
};
