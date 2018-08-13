const router = require('express').Router();
const BidsController = require('../../controllers/BidsController');

router.get('/', BidsController.getBids);
router.post('/', BidsController.addNewBid);

module.exports = router;
