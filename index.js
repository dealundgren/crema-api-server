const express = require('express');
const config = require('./config/config');

const app = express();

require('./config/sequelize')(config);
require('./config/middleware')(app);
require('./config/routes')(app);


app.listen(config.port, () => console.log(`Listening on ${config.port}...`));