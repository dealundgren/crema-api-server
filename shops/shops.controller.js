const Shop = require('./shops.model');
const Metric = require('../metrics/metrics.model');
const sequelize = require('../config/sequelize');


module.exports = {
  getShops
};


// takes in coordinates of map visible to user and return
// all coffee shops in that area
function getShops(sw, ne) {
  const minLat = sw.lat;
  const maxLat = ne.lat;
  const minLong = sw.lng;
  const maxLong = ne.lng;

  sequelize.query(`SELECT *
              FROM shops, metrics
              WHERE shops.id = metrics."shopID" AND shops.lat <= ${maxLat} AND shops.lat >= ${minLat} 
              AND shops.long <= ${maxLong} AND shops.long >= ${minLong}`)
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err) );
}
