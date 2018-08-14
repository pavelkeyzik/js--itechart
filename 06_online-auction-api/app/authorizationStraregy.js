const passportJwt = require('passport-jwt');
const config = require('./config');
const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const UsersModel = require('./models/UsersModel');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwt_secret,
};

const strategy = new JwtStrategy(options, (jwt_payload, done) => {
  UsersModel.getUser(jwt_payload.id)
    .then(user => {
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    })
    .catch(err => done(err));
});

module.exports = strategy;
