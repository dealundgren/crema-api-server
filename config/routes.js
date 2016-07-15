const UserRouter = require('../users/users.routes');

module.exports = (app) => {
  app.use('/v1/users', UserRouter);
};