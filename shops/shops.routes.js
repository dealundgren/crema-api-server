const ShopRouter = require('express').Router();
const ShopCtrl = require('./shops.controller');

ShopRouter.route('/')
  .get(ShopCtrl.get);

module.exports = ShopRouter;
