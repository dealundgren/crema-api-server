const moment = require('moment');
const Metric = require('./metrics.model');

module.exports = {
  addRating,
  getRating,
  getRatingsForShopsByPlaceIds
};

/***** PUBLIC *****/

/**
 * REQUEST HANDLER: Add new rating to the database
 */
function addRating(req, res) {
  Metric.create({
    availRating: req.body.rating,
    userMessage: req.body.message,
    userID: req.body.userID,
    placeID: req.body.placeID
  })
  .then(newMetric => { res.status(201).send(newMetric); })
  .catch(err => {
    console.error('Error posting new rating', req.body, err);
    res.status(500).send({message: 'Error posting new rating'});
  });
}

/**
 * REQUEST HANDLER: Get average ratings for shops by ID's
 */
function getRating(req, res) {
  const promises = [];
  const ratings = {};

  // Retrieve all ratings for each id in the shops array
  req.query.shops.forEach(id => {
    ratings[id] = {rating: 0, count: 0};
    const promise = Metric.findAll({where: {placeID: id}})
      .then(posts => {
        posts.forEach(dataSet => {
          const end = new Date();
          if (end.getTime() - dataSet.createdAt.getTime() < 7200000) { //if time in ms from 1-1-1970 is less than two hours then data is fresh enough
            ratings[id].rating += dataSet.availRating;
            ratings[id].count++;
          }
        })
      });
    promises.push(promise);
  });

  // Aggragate and average the results
  Promise.all(promises).then(() => {
    const IdRated = {}
    for (var placeId in ratings) {
      if (ratings[placeId].count === 0) {
        IdRated[placeId] = null;
      } else {
        IdRated[placeId] = ratings[placeId].rating / ratings[placeId].count;
      }
    }
    res.send(IdRated);
  })
  .catch(err => {
    console.error('Error fetching/calculating rating: ', err);
    res.status(500).send({message: 'Error fetching/calculating rating'});
  });
}

/**
 * Get ratings for shops in the array, and decorate each shop with
 * a "metric" object containing avg. rating
 */
function getRatingsForShopsByPlaceIds(shops) {
  const placeIds = [];
  const ratings = {};
  shops.forEach(shop => placeIds.push(shop.place_id));

  return Metric.findAll({
    where: {
      placeID: { $in: placeIds },
      createdAt: { $gt: moment().subtract(1, 'h') }
    }
  })
  .then(metrics => {
    metrics.forEach(metric => {
      ratings[metric.placeID] = ratings[metric.placeID] || { rating: 0, count: 0 };
      ratings[metric.placeID].rating += metric.availRating;
      ratings[metric.placeID].count++;
    });

    shops.forEach(shop => {
      var shopMetrics = ratings[shop.place_id] || {};
      var avgRating = shopMetrics.rating / shopMetrics.count;
      shop.metrics = {};
      shop.metrics.rating = !isNaN(avgRating) ? avgRating : null;
    });

    return shops;
  })
}
