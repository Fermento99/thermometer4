const mysql = require('mysql');

const utils = require('./utils');

const getConnection = () =>
  mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
  });


module.exports.tempNowThermometer = (thermometer, next) => {
  const connection = getConnection();
  connection.query("SELECT date, ?? FROM history ORDER BY date DESC LIMIT 1;", [thermometer], utils.passDBData(next));

  connection.end();
};

module.exports.tempNow = next => {
  const connection = getConnection();
  connection.query("SELECT * FROM history ORDER BY date DESC LIMIT 1;", utils.passDBData(next));

  connection.end();
};

module.exports.history = (limits, next) => {
  const connection = getConnection();
  const limit = utils.timeBefore(limits);
  
  connection.query('SELECT * FROM history WHERE date > ? ORDER BY date DESC', [limit], utils.passDBData(next));

  connection.end();
};

module.exports.historyThermometer = (limits, thermometer, next) => {
  const connection = getConnection();
  const limit = utils.timeBefore(limits);
  
  connection.query('SELECT date, ?? FROM history WHERE date > ? ORDER BY date DESC', [thermometer, limit], utils.passDBData(next));

  connection.end();
};