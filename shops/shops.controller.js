const Shop = require('./shops.model.js');
const Metric = require('../metrics/metrics.model.js');
const sequelize = require('../config/sequelize');


module.exports = {
  getShops
};


// takes in coordinates of map visible to user and return
// all coffee shops in that area
var getShops = function(sw, ne) {
  var minLat = sw.lat;
  var maxLat = ne.lat;
  var minLong = sw.lng;
  var maxLong = ne.lng;

  sequelize.query(`SELECT *
              FROM shops, metrics
              WHERE shops.id = metrics."shopID" AND shops.lat <= ${maxLat} AND shops.lat >= ${minLat} 
              AND shops.long <= ${maxLong} AND shops.long >= ${minLong}`)
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err) );
};
