const Promise = require('bluebird').Promise;
const bcrypt = require('bcrypt');
Promise.promisifyAll(bcrypt, { context: bcrypt });

module.exports = {
  hashPassword,
  comparePassword
}

/*********** PUBLIC *************/
  /**
   * Hash a plaintext password for storage in the database
   * @param  {String} password 
   */
function hashPassword(password) {
  return bcrypt.genSaltAsync(10)
    .then(salt => bcrypt.hashAsync(password, salt));
}

  /**
   * Compare a plaintext password with a hashed password to see
   * if the user can be authenticated
   * @param  {String} password       [The password entered by the user]
   * @param  {String} hashedPassword [The hashed and salted password for the user]
   * @return {Boolean}
   */
function comparePassword(password, hashedPassword) {
  return bcrypt.compareAsync(password, hashedPassword);
}