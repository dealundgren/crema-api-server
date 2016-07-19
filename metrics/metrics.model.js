const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
var Shop = require('../shops/shops.model.js');
var User = require('../users/user.model.js');


var Metric = sequelize.define('metric', {
  availRating: { type: Sequelize.FLOAT },
  userMessage: { type: Sequelize.STRING },
  userID: { type: Sequelize.INTEGER },
  shopID: { type: Sequelize.INTEGER }
});


Metric.sync({ force: true });
// User.hasMany(Metric, { foreignKey: 'userID' });
// Shop.hasMany(Metric, { foreignKey: 'shopID '});
// Metric.belongsTo(Shop, { foreignKey: 'shopID' });
// Metric.belongsTo(User, { foreignKey: 'userID' });

module.exports = Metric;