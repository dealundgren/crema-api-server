var shops = require('./../shops/shops.model.js')
var fetch = require('node-fetch')
var fs = require('fs')

function request(){
  var latitude = 37.80;
  var longitude = -122.52;
    for(var i = 0; i < 20; i++){
      latitude -= .005;
      for(var j = 0; j < 20; j++){
        longitude += .0075
        var link = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1000&types=cafe&key=AIzaSyBPrCm7cqn-Wz7YRHTdb5zYXMP__vq76yE`
        fetch(link)
        .then(function(response) {
           return response.json();
        })
        .then(response => fs.appendFile('./storedata.txt', response.results))
        .catch(function(err) {
          // error
        }); 
        }
      }
}

request()