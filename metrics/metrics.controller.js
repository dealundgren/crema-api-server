const Metric = require('./metrics.model');

module.exports = {
  addRating
};


// write a POSTed rating to the DB
function addRating(req, res) {

  Metric.create({
    availRating: req.body.rating,
    userMessage: req.body.message,
    userID: req.body.userId,
    shopID: req.body.shopId,
    placeID: req.body.placeID,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(() => { res.status(200).end(); })
  .catch((err) => { console.log(err); });
}

function getRating(req, res) {
    var ratings = {};
    req.query.shops.forEach(id => {
      ratings[id] = {rating: 0 count: 0};
      Metric.findAll({where: {placeID: id}})
      .then(function(posts) {
        var end = new Date();
        if(end.getTime() - posts.createdAt.getTime() < 7200000) { //if time in ms from 1-1-1970 is less than two hours then data is fresh enough
          ratings[id].rating += posts.availRating;
          ratings[id].count++;
        }
      });
    })
    var IdRated = {}
    for (x in ratings) {
      if (ratings[x].count === 0) {
        IdRated[x] = null;
      } else {
        IdRated[x] = ratings[x].rating / ratings[x].count;
      }
    }
  res.send(IdRated);
}
//on the cient side if count is 0 then there are no ratings else divide rating with count for average
