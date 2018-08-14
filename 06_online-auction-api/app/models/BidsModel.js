const db = require('../../db');
const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    image_url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    time_to_end: {
      type: String,
      required: true,
    },
    current_bid: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Bid = db.model('Bid', schema);

class BidsModel {
  async getBids() {
    return await Bid.find((err, bids) => {
      if (err) {
        return Error(err);
      }

      return bids;
    });
  }

  async addNewBid(data) {
    const bid = new Bid(data);

    try {
      await bid.save();
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = new BidsModel();
