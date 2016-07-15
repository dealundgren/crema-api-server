const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../users/user.model');
const compare = require('../utils/encryption').comparePassword;

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

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(err => done(err));
});