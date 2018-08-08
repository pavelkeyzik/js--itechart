const path = require('path');
const app = require(path.resolve(__dirname, 'app'));
const config = require(path.resolve(__dirname, 'app/config'));
const server = app.listen(config.port);
const logger = require('./logger');

server.on('listening', () => {
  logger.info('┏━━━━━━━━━━━━━━━━━━━━━━━━┓');
  logger.info('┃   ONLINE AUCTION API   ┃');
  logger.info('┗━━━━━━━━━━━━━━━━━━━━━━━━┛');
  logger.info('==> Launch application');
  logger.info(`==> The application listens to the port::${config.port}`);
});

server.on('error', error => {
  logger.error(error);
  throw error;
});

server.on('close', () => {
  logger.info();
  logger.info('<== Closing the connection...');
  logger.info();
  logger.info('😘  Bye! I hope you will be back soon.');
});
