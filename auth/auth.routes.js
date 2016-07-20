// Receive login, logout, and sign up routes, and call appropriate auth functions.

var passport = require('passport');
var AuthRouter = require('express').Router();
var AuthCtrl = require('./auth.controller');

// Upon user login, check if user exists, and return success with new user if so.
AuthRouter.route('/login')
  .post(passport.authenticate('local'), AuthCtrl.login);

// Upon signup, 
AuthRouter.route('/signup')
  .post(AuthCtrl.addUser);

// Upon logout
AuthRouter.route('/logout')
  .post(AuthCtrl.endSession);

module.exports = AuthRouter;