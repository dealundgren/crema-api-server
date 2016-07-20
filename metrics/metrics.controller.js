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
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(() => { res.status(200).end(); })
  .catch((err) => { console.log(err); });
}
