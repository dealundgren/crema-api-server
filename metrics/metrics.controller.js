const Metric = require('./metrics.model');
var cron = require('node-cron');

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

cron.schedule('00 30 3 * * *', function(){ //run cron job at 330 am every day
  Metric.destroy({where: {}});
});
