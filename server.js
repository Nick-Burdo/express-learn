const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer'); 
const upload = multer(); // for parsing multipart/form-data
const ObjectID = require('mongodb').ObjectID;

const db = require('./db');
const artistsController = require('./controllers/artists');

const app = express();

db.connect(function (err) {
  if (err) {
    return console.log(err);
  }
  app.listen(3012, function () {
    console.log('API app started at http://localhost:3012');
  })
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res) {
  res.send('Hello, App!');
});

app.get('/artists', artistsController.all);

app.post('/artists', upload.array(), artistsController.create);

app.get('/artists/:id', artistsController.read);

app.put('/artists/:id', upload.array(), artistsController.update);

app.delete('/artists/:id', artistsController.delete);
