const Shop = require('./shops.model.js');
const Metric = require('../metrics/metrics.model.js');
const sequelize = require('../config/sequelize');


module.exports = getShops;


// takes in users coordinates and zoom level
var getShops = function(lat, long, zoom) {
  // TODO calculate the min and max lat/long to use in the db query, based on
  // what was passed in

  var minLat;
  var maxLat;
  var minLong;
  var maxLong;


  sequelize.query(`SELECT *
              FROM shops, metrics
              WHERE shops.id = metrics."shopID" AND shops.lat <= ${maxLat} AND shops.lat >= ${minLat} 
              AND shops.long <= ${maxLong} AND shops.long >= ${minLong}`)
  .then((res) => {
    //todo: hand res to the calling function
  })
  .catch((err) => console.log(err) );

};
