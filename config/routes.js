const UserRouter = require('../users/users.routes');
const ShopRouter = require('../shops/shops.routes');

module.exports = (app) => {
  app.use('/v1/users', UserRouter);
  app.use('/v1/shops', ShopRouter);
};