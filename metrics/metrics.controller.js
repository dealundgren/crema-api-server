const Metric = require('./metrics.model');

module.exports = {
  addRating,
  getRating
};


// write a POSTed rating to the DB
function addRating(req, res) {
  Metric.create({
    availRating: req.body.message,
    userMessage: req.body.userMessage,
    userID: req.body.userID,
    placeID: req.body.placeID
  })
  .then(() => { res.status(200).end(); })
  .catch((err) => { console.log(err); });
}

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


//on the cient side if count is 0 then there are no ratings else divide rating with count for average
