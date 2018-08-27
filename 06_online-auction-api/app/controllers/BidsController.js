const BidsModel = require('../models/BidsModel');
const logger = require('../../logger');
const multer = require('multer');
const config = require('../config');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const messages = require('../messages');
const socket = require('../socket');

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

class BidsController {
  getBids(req, res) {
    BidsModel.getBids()
      .then(data => {
        if (!data.length) {
          logger.info(messages.bidsNotFoundMessage);
          return res.status(404).send({ message: messages.bidsNotFoundMessage });
        }
        res.status(200).send(data);
      })
      .catch(error => {
        res.status(error.status).send(error);
      });
  }

  addNewBid(req, res) {
    if(req.user.role !== 'admin') {
      return res.status(403).send({ message: messages.notHavePermission });
    }
    upload.single('image')(req, res, err => {
      if (err) {
        logger.error(err);
        return res.status(500).send({ message: err });
      }

      const { filename, destination } = req.file;
      req.body.image_url = path.join(destination, filename);

      BidsModel.addNewBid(req.body)
        .then(() => {
          res.status(200).send({ message: messages.bidAddedSuccessful });
        })
        .catch(err => {
          logger.error(err.message);
          res.status(500).send({ message: err.message });
        });
    });
  }

  riseOfFivePercent(req, res) {
    const { id } = req.params;

    BidsModel.riseOfFivePercent(id, req.user._id)
      .then((data) => {
        socket.sendAll(data);
        res.status(200).send({ message: messages.bidRiseOfFivePercentSuccessful });
      })
      .catch(err => {
        logger.error(err.message);
        res.status(500).send({ message: err.message });
      });
  }

  riseOfTenPercent(req, res) {
    const { id } = req.params;

    BidsModel.riseOfTenPercent(id, req.user._id)
      .then((data) => {
        socket.sendAll(data);
        res.status(200).send({ message: messages.bidRiseOfTenPercentSuccessful });
      })
      .catch(err => {
        logger.error(err.message);
        res.status(500).send({ message: err.message });
      });
  }

  riseOfTwentyPercent(req, res) {
    const { id } = req.params;

    BidsModel.riseOfTwentyPercent(id, req.user._id)
      .then((data) => {
        socket.sendAll(data);
        res.status(200).send({ message: messages.bidRiseOfTwentyPercentSuccessful });
      })
      .catch(err => {
        logger.error(err.message);
        res.status(500).send({ message: err.message });
      });
  }
  
  removeBid(req, res) {
    const { id } = req.params;

    BidsModel.removeBid(id)
      .then((data) => {
        res.status(200).send({ message: messages.bidRemovedSuccessful, data });
      })
      .catch(err => {
        logger.error(err);
        res.status(500).send({ message: err.message });
      });
  }
}

module.exports = new BidsController();
