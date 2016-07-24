const MetricRouter = require('express').Router();
const MetricCtrl = require('./metrics.controller');

MetricRouter.route('/')
  .post(MetricCtrl.addRating)
  .get(MetricCtrl.getRating);


module.exports = MetricRouter;
