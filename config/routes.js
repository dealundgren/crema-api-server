const UserRouter = require('../users/users.routes');
// const ShopRouter = require('../shops/shops.routes');
const MetricRouter = require('../metrics/metrics.routes');
const AuthRouter = require('../auth/auth.routes');
const AuthCtrl = require('../auth/auth.controller');


module.exports = (app) => {
  app.use('/v1/auth', AuthRouter);
  app.use('/v1/users', AuthCtrl.checkAuth, UserRouter);
  app.use('/v1/metrics', AuthCtrl.checkAuth, MetricRouter);
  // app.use('/v1/shops', ShopRouter);
};