const express = require('express');
const config = require('./config/config');

const app = express();

require('./config/sequelize');
require('./config/passport');
require('./config/middleware')(app, config);
require('./config/routes')(app);

app.listen(config.port, () => console.log(`Listening on ${config.port}...`));

module.exports = app;
