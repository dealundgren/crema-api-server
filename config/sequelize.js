const config = require('./config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.db);
sequelize.authenticate()
  .then(() => console.log('database is connected'))
  .catch(err => console.error(err));

module.exports = sequelize;
