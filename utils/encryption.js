const Promise = require('bluebird').Promise;
const bcrypt = require('bcrypt');
Promise.promisifyAll(bcrypt, { context: bcrypt });

module.exports = {
  hashPassword 
}

/*********** PUBLIC *************/

function hashPassword(password) {
  return bcrypt.genSaltAsync(10)
    .then(salt => bcrypt.hashAsyc(password, salt));
  
}