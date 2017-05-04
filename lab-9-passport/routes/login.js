var router = require('express').Router();
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var users = require('../models/users');



router.post('/', (req, res) => {
    //if authenticate

    passport.authenticate('local', (err, user, info) => {

    });
    res.redirect('/private');

    //if not
    res.redirect('/', errMessage);
});

module.exports = router;