const config = {
  port: process.env.PORT || 3000,
  dataBaseURL: 'mongodb://localhost:27017/online-auction',
  imagesPath: {
    bids: './public/images/bids',
  },
  supportedFilesBids: /jpeg|jpg|png/,
};

module.exports = config;
