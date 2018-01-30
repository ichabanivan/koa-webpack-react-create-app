let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/';

module.exports = function (app) {
  MongoClient.connect(url, function (err, db) {
    app.database = db.db('todos')
  })
};
