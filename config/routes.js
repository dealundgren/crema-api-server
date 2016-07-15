const UserRouter = require('../users/users.route');

module.exports = (app) => {
  app.use('/v1/users', UserRouter);
};