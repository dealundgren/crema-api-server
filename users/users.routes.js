const UserRouter = require('express').Router();
const UserCtrl = require('./users.controller');

UserRouter.route('/:id')
	.get(UserCtrl.getOne);


module.exports = UserRouter;