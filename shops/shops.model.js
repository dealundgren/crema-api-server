const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

  /**
   * Creates a database schema to store coffee shop information retrieved from Google Places
   * This schema is not currently used in this repo but could be of use for future projects
   * 
   */
const Shop = sequelize.define('shop', {
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
  photos: { type: Sequelize.ARRAY(Sequelize.STRING) },
  googleid: { type: Sequelize.STRING, unique: true}
});

Shop.sync();

module.exports = Shop;