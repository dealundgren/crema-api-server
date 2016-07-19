const encryption = require('../utils/encryption');
const User = require('../users/user.model');
const UserCtrl = require('../users/user.controller');

module.exports = {
  addUser
};

/***** PUBLIC *****/

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