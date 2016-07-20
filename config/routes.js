const UserRouter = require('../users/users.routes');
const ShopRouter = require('../shops/shops.routes');
const MetricRouter = require('../metrics/metrics.routes');
const AuthRouter = require('../auth/auth.routes');

module.exports = (app) => {
  app.use('/v1/auth', AuthRouter);
  app.use('/v1/users', UserRouter);
  app.use('/v1/shops', ShopRouter);
  app.use('/v1/metrics', MetricRouter);
};