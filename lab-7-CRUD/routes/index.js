const express = require('express');
var router = express.Router();
var recipeRoute = require('./recipeRoute');
var commentRoute = require('./commentRoute');

let configRoutes = (app) => {
    app.use('/recipes', recipeRoute);
    app.use('/comments', commentRoute);
};

module.exports = configRoutes;