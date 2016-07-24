const MetricRouter = require('express').Router();
const MetricCtrl = require('./metrics.controller');

MetricRouter.route('/Metrics')
  .post(MetricCtrl.addRating);
  .get(MetricCtrl.getRating)