const User = require('../users/user.model');

module.exports = {
  getCurrentUser,
  createUser
};

/***** PUBLIC *****/



function getCurrentUser(req, res) {
}
  /**
   * Add a user to the Users table.  Called by the addUser function in auth controller
   * @param {Request} req 
   * @param {Response} res
   */
function createUser(req, res) {
  return User.create({
    username: req.body.username,
    password: req.body.password,
    fullName: req.body.fullName,
    email: req.body.email || null
    // handle role type here someday
  });
}

