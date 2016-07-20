const Shop = require('./shops.model');
const Metric = require('../metrics/metrics.model');
const sequelize = require('../config/sequelize');


module.exports = {
  getShops
};


// takes in coordinates of map visible to user and return
// all coffee shops in that area
function getShops(req, res) {
  const minLat = req.query.sw.lat;
  const maxLat = req.query.ne.lat;
  const minLong = req.query.sw.lng;
  const maxLong = req.query.ne.lng;

  sequelize.query(`SELECT *
              FROM shops, metrics
              WHERE shops.id = metrics."shopID" AND shops.lat <= ${maxLat} AND shops.lat >= ${minLat} 
              AND shops.long <= ${maxLong} AND shops.long >= ${minLong}`)

  .then((rows) => {
    res.send(rows);
  })
  .catch((err) => console.log(err) );
}
