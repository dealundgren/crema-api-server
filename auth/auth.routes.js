const authLocal = require('../config/passport').authLocal;
const AuthRouter = require('express').Router();
const AuthCtrl = require('./auth.controller');
const passport = require('passport');

// Upon user login, check if user exists, and return success with new user if found
AuthRouter.route('/login')
  .post(authLocal, AuthCtrl.login);

// Upon user signup, add user to the database and return a token to the client
AuthRouter.route('/signup')
  .post(AuthCtrl.addUser);

// Upon app load, check whether the client has a valid token in storage
AuthRouter.route('/checkToken')
  .get(passport.authenticate('jwt', { session: false }), AuthCtrl.checkTokenSuccess);

module.exports = AuthRouter;
