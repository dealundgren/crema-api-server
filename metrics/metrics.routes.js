const MetricRouter = require('express').Router();
const MetricCtrl = require('./metrics.controller');

MetricRouter.route('/addRating')
  .post(MetricCtrl.addRating);


module.exports = MetricRouter;