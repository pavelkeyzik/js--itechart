const router = require('express').Router();
const users = require('./users');
const bids = require('./bids');

router.use('/users', users);
router.use('/bids', bids);

module.exports = router;
