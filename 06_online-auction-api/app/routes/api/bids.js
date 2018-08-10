const router = require('express').Router();
const BidsController = require('../../controllers/BidsController');

router.get('/', BidsController.getBids);

module.exports = router;
