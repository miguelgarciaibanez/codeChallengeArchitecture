//const express = require('express');
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import dotenv from 'dotenv';
import router from './src/routes/pets.js';

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


dotenv.config();
const PORT = process.env.PORT;
// 
//Global routes configconfig
app.use( '/api', router );


var server = app.listen( PORT , function () {
  console.log('Example app listening at http://%s', PORT);
});