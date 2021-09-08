const fs = require('fs');
const dotenv = require('dotenv');
const path = require('path');

if (!process.env.DBHOST) {
  dotenv.config({
    path: path.join(__dirname, '..', `.env.${process.env.NODE_ENV}`),
  });
}

module.exports = {
  // config(process.env.NODE_ENV);
  development: {
    post: process.env.PORT,
    host: process.env.HOST,
  },

  production: {
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    host: process.env.DBHOST,
    dialect: process.env.DBTYPE,
    port: process.env.DBPORT,
    operatorsAliases: false,
    timezone: process.env.TIMEZONE,
  },
};
