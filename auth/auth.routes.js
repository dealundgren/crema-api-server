// Receive login, logout, and sign up routes, and call appropriate auth functions.

const authLocal = require('../config/passport').authLocal;
const AuthRouter = require('express').Router();
const AuthCtrl = require('./auth.controller');

// Upon user login, check if user exists, and return success with new user if so.
AuthRouter.route('/login')
  .post(authLocal, AuthCtrl.login);

// Upon signup, 
AuthRouter.route('/signup')
  .post(AuthCtrl.addUser);

module.exports = AuthRouter;