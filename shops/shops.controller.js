const fetch = require('node-fetch');
const config = require('../config/config');

const GOOGLE_PLACES_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${config.googleKey}`;

module.exports = {
  get: get
};

/***** PUBLIC *****/

function get(req, res) {
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
