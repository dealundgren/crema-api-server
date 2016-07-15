const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Metric = sequelize.define('metric', {
  name: { type: Sequelize.STRING, allowNull: false },
  lat: { type: Sequelize.FLOAT, allowNull: false },
  long: { type: Sequelize.FLOAT, allowNull: false },
  description: { type: Sequelize.STRING },
  openHours: { type: Sequelize.STRING },
  price: { type: Sequelize.ENUM('$', '$$', '$$$', '$$$$')},
  wifi: { type: Sequelize.BOOLEAN },
  address: { type: Sequelize.STRING },
  telephone: { type: Sequelize.STRING },
  rating: { type: Sequelize.FLOAT },
  website: { type: Sequelize.STRING },
  photos: { type: Sequelize.ARRAY(Sequelize.STRING) }
});

Metric.sync();

module.exports = Metric;