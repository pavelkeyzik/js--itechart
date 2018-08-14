const BidsModel = require('../models/BidsModel');
const logger = require('../../logger');
const multer = require('multer');
const config = require('../config');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const fileFilter = (req, file, cb) => {
  const filetypes = config.supportedFilesBids;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(`Error: File upload only supports the folowing filetypes: ${filetypes}`);
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync(config.imagesPath.bids)) {
      fs.mkdirSync(config.imagesPath.bids);
    }
    cb(null, config.imagesPath.bids);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${crypto
        .createHash('sha1')
        .update(file.originalname)
        .digest('hex')}.${new Date().getTime()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage, fileFilter });

const bidsNotFoundMessage = 'Bids not found';
const bidAddedSuccessful = 'Bid added successful';

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

  addNewBid(req, res) {
    upload.single('image')(req, res, err => {
      if (err) {
        logger.error(err);
        return res.status(500).send({ message: err });
      }

      const { filename, destination } = req.file;
      req.body.image_url = path.join(destination, filename);

      BidsModel.addNewBid(req.body)
        .then(() => {
          res.status(200).send({ message: bidAddedSuccessful });
        })
        .catch(err => {
          logger.error(err.message);
          res.status(500).send({ message: err.message });
        });
    });
  }
}

module.exports = new BidsController();
