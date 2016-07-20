// var shops = require('./../shops/shops.model.js')
var fetch = require('node-fetch')

var request = function(){
  var latitude = 37.80;
  var longitude = -122.52;
    for(var i = 0; i < 10; i++){
      latitude += .01;
      longitude += .015
      var link = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=2000&types=cafe&key=AIzaSyDSHhrMlFZatIeqhl2dMibI4TwRQig-Dkw`
      fetch(link)
      .then(function(response) {
         return response.json();
      })
      .then(response => response.results.map(shop => shop.place_id))
      .then(ids => console.log('IDs: ', ids))
      .then(
        // for each id
        // GET /places/details/{id}
        // then insert into Shop database
        )
      .catch(function(err) {
        // error
      }); 
      }
}

request()