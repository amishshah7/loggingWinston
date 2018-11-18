const express = require('express');

const app = express();


const { createLogger, format, transports } = require('winston');

/*
const logger = createLogger({
  level: 'debug',
  format: format.simple(),
  // You can also comment out the line above and uncomment the line below for JSON format
  // format: format.json(),
  transports: [new transports.Console()]
});
*/

// add timstamps
const logger = createLogger({
    level: 'debug',
    format: format.combine(
      format.colorize(),
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [new transports.Console()]
  });

  

app.get('/', (req, res) => {
    logger.info('Hello world');
    logger.debug('Debugging info');
    res.send("Hi there");
  });

app.listen(8081, () => {
  console.log('Listening on port 8081');
  
});
