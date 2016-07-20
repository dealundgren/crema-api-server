const ShopRouter = require('express').Router();
const ShopCtrl = require('./shops.controller');

ShopRouter.route('/map')
  .get(ShopCtrl.getShops);

module.exports = ShopRouter;