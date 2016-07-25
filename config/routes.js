const UserRouter = require('../users/users.routes');
const ShopRouter = require('../shops/shops.routes');
const MetricRouter = require('../metrics/metrics.routes');
const AuthRouter = require('../auth/auth.routes');
const AuthCtrl = require('../auth/auth.controller');
const passport = require('passport');


module.exports = (app) => {
  app.use('/v1/auth', AuthRouter);
  app.use('/v1/users', passport.authenticate('jwt', { session: false }), UserRouter);
  app.use('/v1/metrics', passport.authenticate('jwt', { session: false }), MetricRouter);
  app.use('/v1/shops', passport.authenticate('jwt', { session: false }), ShopRouter);
};
