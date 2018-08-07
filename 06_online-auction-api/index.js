const path = require('path');
const app = require(path.resolve(__dirname, 'app'));
const config = require(path.resolve(__dirname, 'app/config'));
const server = app.listen(config.port);

server.on('listening', () => {
  console.log('┏━━━━━━━━━━━━━━━━━━━━━━━━┓');
  console.log('┃   ONLINE AUCTION API   ┃');
  console.log('┗━━━━━━━━━━━━━━━━━━━━━━━━┛');
  console.log('==> Launch application');
  console.log(`==> The application listens to the port::${config.port}`);
});

server.on('error', error => {
  throw error;
});

server.on('close', () => {
  console.log();
  console.log('<== Closing the connection...');
  console.log();
  console.log('😘  Bye! I hope you will be back soon.');
});
