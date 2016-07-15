const bodyParser = require('body-parser');
const morgan = require('morgan');

module.exports = (app, config) => {
  app.use(bodyParser.json());
  app.use(morgan(config.logLevel));
};
