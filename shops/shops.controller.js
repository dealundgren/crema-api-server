const fetch = require('node-fetch');
const config = require('../config/config');
// const Shop = require('./shops.model');
// const Metric = require('../metrics/metrics.model');
// const sequelize = require('../config/sequelize');


const GOOGLE_PLACES_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${config.googleKey}`

module.exports = {
  get
};


// takes in coordinates of map visible to user and return
// all coffee shops in that area
// function getShops(req, res) {
//   const minLat = req.query.sw.lat;
//   const maxLat = req.query.ne.lat;
//   const minLong = req.query.sw.lng;
//   const maxLong = req.query.ne.lng;
//
//   sequelize.query(`SELECT *
//               FROM shops, metrics
//               WHERE shops.id = metrics."shopID" AND shops.lat <= ${maxLat} AND shops.lat >= ${minLat}
//               AND shops.long <= ${maxLong} AND shops.long >= ${minLong}`)
//
//   .then((rows) => {
//     res.send(rows);
//   })
//   .catch((err) => console.log(err) );
// }

function get(req, res) {
  console.log('Location: ', req.query.location);
  fetch(`
    ${GOOGLE_PLACES_URL}
    &location=${req.query.location}
    &radius=2500
    &type=cafe
    &keyword=coffee
  `)
    .then(response => response.json())
    .then(body => res.send(body.results))
    .catch(err => {
      console.error('Failed to search Google Places: ', err);
      res.status(500).send('Error searching Google Places');
    });
}
