const BidsModel = require('../models/BidsModel');
const logger = require('../../logger');

const bidsNotFoundMessage = 'Bids not found';

class BidsController {
  getBids(req, res) {
    BidsModel.getBids()
      .then(data => {
        if (!data.length) {
          logger.info(bidsNotFoundMessage);
          return res.status(404).send({ message: bidsNotFoundMessage });
        }
        res.status(200).send(data);
      })
      .catch(error => {
        res.status(error.status).send(error);
      });
  }
}

module.exports = new BidsController();
