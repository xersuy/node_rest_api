const path = require('path');

const express = require('express');
const app = express();
const cors = require('cors');

var http = require('http');

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

app.use(express.static(path.join(__dirname, 'build')));

http.createServer(app).listen(80);
