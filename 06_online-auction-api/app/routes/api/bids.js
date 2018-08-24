const router = require('express').Router();
const BidsController = require('../../controllers/BidsController');

router.get('/', BidsController.getBids);
router.post('/', BidsController.addNewBid);
router.post('/raise-five/:id', BidsController.riseOfFivePercent);
router.post('/raise-ten/:id', BidsController.riseOfTenPercent);
router.post('/raise-twenty/:id', BidsController.riseOfTwentyPercent);
router.delete('/remove-bid/:id', BidsController.removeBid);

module.exports = router;
