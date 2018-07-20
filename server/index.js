const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const c = require('./controller.js');
const massive = require('massive');
require('dotenv').config();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
  }).catch(error => {
    console.log('-------------- error', error);
  });


const port = 4000;
app.listen(port, () => {console.log(`server is listening on ${port}`)})