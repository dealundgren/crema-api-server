const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

var User = sequelize.define('user', {
  username: { type: Sequelize.STRING, unique: true, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  fullName: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, unique: true },
  role: { 
    type: Sequelize.ENUM('MEMBER', 'OWNER'), // NOTE: not currently being used
    defaultValue: 'MEMBER'
  }  
});



User.sync({ force: true });


module.exports = User;