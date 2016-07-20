const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../users/user.model');
const compare = require('../utils/encryption').comparePassword;

// Create strategy to us for local authentication calls
passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({where: { username }})
    .then(user => {
      if(!user){
        done('user not found');
      } else {
        compare(password, user.password)
          .then(match => {
            if (!match) {
              done('wrong password');
            } else {
              done(null, user);
            }
          });
      }
    });
}));

// Add user ID to cookie and store cookie-ID relationship
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Grab user info off of request, and find corresponding user in db
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(err => done(err));
});