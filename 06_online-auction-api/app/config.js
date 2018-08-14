const config = {
  port: process.env.PORT || 3000,
  dataBaseURL: 'mongodb://localhost:27017/online-auction',
  imagesPath: {
    bids: './public/images/bids',
  },
  supportedFilesBids: /jpeg|jpg|png/,
  jwt_secret: 'sQewr41l_av2',
  jwt_expiration_time: '7d',
};

module.exports = config;
