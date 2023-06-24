const compression = require('compression');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const db = require('./config/database');

const app = express();
const port = 3001;

app.use(compression());
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
  );
  next();
});

// connect routes
require('./routes.js')(app);

// launch the application
const start = async () => {
  try {
    await db.authenticate();
    app.listen(port, () => {
      console.log(`Listen port: ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

start();

module.exports = app;
