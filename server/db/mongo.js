var MongoClient = require('mongodb').MongoClient;
// Connection url
var url = 'mongodb://localhost:27017/';
// Connect using MongoClient

module.exports = function (app) {
  MongoClient.connect(url, function (err, db) {
    app.database = db.db('todos')
  })
};
