var cron = require('node-cron');

cron.schedule('00 30 3 * * *', function(){ //run cron job at 330 am every day
  Metric.destroy({where: {}});
});
