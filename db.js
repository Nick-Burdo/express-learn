const MongoClient = require('mongodb').MongoClient;

const state = {
  db: null
};

exports.connect = function(done) {
  MongoClient.connect('mongodb://localhost:27017/myapi', function (err, database) {
    if (err) {
      done(err);
      return console.log('Error DB connection', err);
    }
    state.db = database;
    done(null, database);
  });
};

exports.get = function () {
  return state.db;
}

exports.artists = function() {
  return state.db.collection('artists');
}