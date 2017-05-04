const mongoDBClient = require('mongodb').MongoClient;

const mongodbConfig = {
    'serverUrl': 'mongodb://localhost:27017/',
    'database': 'lab7-recipes'
};

let mongoUrl = mongodbConfig.serverUrl + mongodbConfig.database;
let connection = undefined;

let dbPromise = () => {
    if(!connection)
        connection = mongoDBClient.connect(mongoUrl);
    return connection;
}

module.exports.connect = dbPromise;