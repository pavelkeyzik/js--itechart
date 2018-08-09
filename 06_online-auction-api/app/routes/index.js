const router = require('express').Router();
const api = require('./api');
const logger = require('../../logger');

router.use((req, res, next) => {
  logger.info(`${req.method}: ${req.originalUrl}`);
  next();
});
router.use('/api', api);

module.exports = router;
