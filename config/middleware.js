const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const cors = require('cors');

module.exports = (app, config) => {
  app.use(cors());
  app.use(passport.initialize());
  app.use(bodyParser.json());
  app.use(morgan(config.logLevel));
};
