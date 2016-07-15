const UserRouter = require('express').Router();
const UserCtrl = require('./users.controller');

UserRouter.route('/currentuser')
	.get(UserCtrl.getCurrentUser);


module.exports = UserRouter;