const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const { createLogger, transports, format } = require('winston');
const { combine, timestamp, prettyPrint, printf } = format;

if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
}

if (fs.existsSync('logs/combined.log')) {
  fs.unlinkSync('logs/combined.log');
}

if (fs.existsSync('logs/error.log')) {
  fs.unlinkSync('logs/error.log');
}

const customLoggerFormatFile = printf(d => {
  return `[${d.timestamp}] (${d.level}): ${d.message}`;
});

const customLoggerFormatConsole = printf(d => {
  const template = `[${new Date().toLocaleTimeString()}] ${d.message}`;

  switch (d.level) {
    case 'error':
      return chalk.white.bgRed(template);
    case 'warn':
      return chalk.yellow(template);
    default:
      return template;
  }
});

const logger = createLogger({
  level: 'info',
  format: combine(timestamp(), prettyPrint(), customLoggerFormatFile),
  transports: [
    new transports.File({
      filename: path.join('logs', 'error.log'),
      level: 'error',
    }),
    new transports.File({
      filename: path.join('logs', 'combined.log'),
    }),
  ],
});

if (process.env.NODE_END !== 'production') {
  logger.add(
    new transports.Console({
      format: combine(timestamp(), prettyPrint(), customLoggerFormatConsole),
    })
  );
}

module.exports = logger;
