const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');

module.exports = (app, config) => {
  app.use(cookieParser());
  app.use(session({ secret: config.secret }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(bodyParser.json());
  app.use(morgan(config.logLevel));
};
