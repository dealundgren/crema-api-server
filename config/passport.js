const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const config = require('./config');
const User = require('../users/user.model');
const compare = require('../utils/encryption').comparePassword;

module.exports = {
  authLocal
};

// Create strategy to use for jwt authentication calls
passport.use(new JwtStrategy(
  {
    secretOrKey: config.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
  }, (jwt_payload, done) => {
  User.findOne({where: { id: jwt_payload.id }})
    .then(user => {
      if(user) {
        done(null, user);
      } else {
        done(null, false);
      }
    })
    .catch(done);
}));

// Create strategy to use for local authentication calls
function authLocal(req, res, done) {
  console.log(req);
  User.findOne({where: { username: req.body.username }})
    .then(user => {
      if(!user){
        done('user not found');
      } else {
        compare(req.body.password, user.password)
          .then(match => {
            if (!match) {
              done('wrong password');
            } else {
              //create jwt and send along to next mdlware w/ user.
              req.user = user;
              done(null);
            }
          });
      }
    });
};


