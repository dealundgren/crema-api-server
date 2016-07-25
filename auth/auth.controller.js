const encryption = require('../utils/encryption');
const UserCtrl = require('../users/users.controller');
const jwt = require('jwt-simple');
const config = require('../config/config');

module.exports = {
  addUser,
  login
};

/***** PUBLIC *****/

function login(req, res) {
  const token = jwt.encode(req.user, config.secret);
  res.json({
    token: token,
    user: {
      id: req.user.id,
      username: req.user.username,
      fullName: req.user.fullName,
      email: req.user.email,
      role: req.user.role,
      createdAt: req.user.createdAt,
      updatedAt: req.user.updatedAt
    }
  });
}

function addUser(req,res) {
  return encryption.hashPassword(req.body.password)
    .then(hashedPassword => {
      req.body.password = hashedPassword;
      return UserCtrl.createUser(req, res);
    })
    .then(newUser => {
      const token = jwt.encode(newUser, config.secret);
      res.json({
        token: token,
        user: {
          username: newUser.username,
          fullName: newUser.fullName,
          id: newUser.id
        }
      });
    })
    .catch(err => {
      console.error(err);
      res.status(401).send({message: 'This username has already been taken'});
    });
}