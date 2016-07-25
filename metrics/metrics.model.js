const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const Shop = require('../shops/shops.model');
const User = require('../users/user.model');

const Metric = sequelize.define('metric', {
  availRating: { type: Sequelize.FLOAT },
  userMessage: { type: Sequelize.STRING },
  userID: { type: Sequelize.INTEGER },
  placeID: { type: Sequelize.STRING }
});


Metric.sync();
// TODO: Add relationship back when we need to relate user with their data
// User.hasMany(Metric, { foreignKey: 'userID' });
// Metric.belongsTo(User, { foreignKey: 'userID' });

module.exports = Metric;
