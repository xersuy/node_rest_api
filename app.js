const path = require('path');

const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
var http = require('http');

const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const env = process.env.NODE_ENV || 'development';
const config = require('./config/index.js')[env];

console.log(config);

var swaggerDefinition = {
  info: {
    // API informations
    title: 'NODEJS REST API SERVER SWAGGER', // Title
    version: '0.1.0', // Version
    description: 'node restful api', // Description
  },
  // host: 'localhost:3000', // Host
  basePath: '/', // Base path
  securityDefinitions: {
    bearerAuth: {
      type: '',
      name: '',
      in: '',
    },
  },
  // security: [{ bearerAuth: [] }],
};

var customSwaggerOption = {
  explorer: false,
  swaggerOptions: {
    validatorUrl: null,
  },

  // Import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // Path to the API docs
  apis: ['./api/*.js', './api/*.yaml'],
};

// JSDoc apply
const swaggerSpec = swaggerJSDoc(customSwaggerOption);

// cors apply
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json()); //For JSON requests

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type, Authorization');
  next();
});
// swagger api docs apply
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use(express.static(path.join(__dirname, 'build')));

http.createServer(app).listen(config.port ?? 80);
