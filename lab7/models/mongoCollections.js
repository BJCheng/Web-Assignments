const dbConnect = require('./dbConnection');

let dbConnectPromise = undefined;

function getCollection(collectionName) {
    if (!dbConnectPromise) {
        dbConnectPromise = dbConnect.connect();

        return dbConnectPromise.then((db) => {
            return db.collection(collectionName);
        }).catch((err) => {
            console.log(err);
        });
    };
}

module.exports = {
    "getRecipesCollection": getCollection('recipes')
};