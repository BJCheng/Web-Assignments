var express = require('express');
var palindromeRouter = require('./palindrome');

let configRoutes = (app)=>{
    app.use('*', (req, res)=>{
        res.render('palindrome');
    });
}

module.exports = configRoutes;