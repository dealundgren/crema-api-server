const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const Shop = require('../shops/shops.model.js')
const User = require('../users/user.model.js')


const Metric = sequelize.define('metric', {
  availRating: { type: Sequelize.FLOAT },
  userMessage: { type: Sequelize.STRING }
});


Metric.belongsTo(Shop);
Metric.belongsTo(User);
Metric.sync();

module.exports = Metric;