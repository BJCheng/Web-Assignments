// const mongoDBClient = require('mongodb').MongoClient;
// const mongodbConfig = {
//     'serverUrl': 'mongodb://localhost:27017/',
//     'database': 'lab7-recipes'
// };
// let mongoUrl = mongodbConfig.serverUrl + mongodbConfig.database;
// mongoDBClient.connect(mongoUrl, (err, db)=>{
//     let recipe = db.collection('recipes').findOne({id:"16bf2ab1-5da6-49c8-b8e0-95fc557a96ca"});
//     console.log(recipe);
// });
const express = require('express');
var app = express();
var configRouter = require('./routes');
var bodyParser = require('body-parser');

//use middleware
app.use(bodyParser.json());

//define routes
configRouter(app)

app.listen(3000, (req, res)=>{
    console.log('server listening on port 3000.');
});