const router = require('express').Router();
const api = require('./api');
const auth = require('./auth');
const logger = require('../../logger');
const passport = require('passport');
const authorizationStraregy = require('../authorizationStraregy');

passport.use(authorizationStraregy);
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
router.use((req, res, next) => {
  logger.info(`${req.method}: ${req.originalUrl}`);
  next();
});
router.use(passport.initialize());
router.use(passport.session());
router.use('/api', passport.authenticate('jwt', { session: false }), api);
router.use('/auth', auth);

module.exports = router;
