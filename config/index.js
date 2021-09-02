const fs = require('fs');
const dotenv = require('dotenv');
const path = require('path');



const config = _nodeEnv => {
  dotenv.config({path: path.join(__dirname, '..', `.env.${_nodeEnv}`)});
  return {
    host: process.env.HOST,
    port: process.env.PORT,
  };
};

module.exports = () => {
  return config(process.env.NODE_ENV);
};
