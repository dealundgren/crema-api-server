const encryption = require('../utils/encryption');
const User = require('../users/user.model');
const UserCtrl = require('../users/user.controller');


module.exports = {
  addUser
};

/***** PUBLIC *****/

function login(req, res) => res.send(req.user);

function addUser(req,res) {
  return encryption.hashPassword(req.body.password)
    .then(hashedPassword => {
      req.body.password = hashedPassword;
      return UserCtrl.createUser(req, res);
    })
    .then(newUser => {
      res.login(newUser, err => {
        if (err) {
          console.error(err);
          res.status(500).send({ message: 'Failed to login' });
        } else {
          res.send({
            username: newUser.username,
            fullName: newUser.fullName,
            id: newUser.id
          });
        }
      });
    });
}

function endSession(req, res) {
  req.logout(); // <~~~~~~~~~~~~ Do I need to import passport for this?
  // <~~~~~~~~~~~~~~~~ Need to redirect user to login. but how?
  res.send('Logged Out');
}