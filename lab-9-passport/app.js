var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var static = express.static(__dirname + '/public');
var users = require('./models/users');

var configRoutes = require('./routes');

//set middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', static);

//view engine
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: "main" }));

//configure routes
configRoutes(app);
passport.use(new localStrategy((username, password, done) => {
    users.findByUsername(username).then((userRecord) => {
        if (!userRecord)
            return done(null, false);
        if (userRecord.password != password)
            return done(null, false);

        return done(null, userRecord);
    }).catch((errMesg) => {
        return done(errMesg);
    });
}));

// passport.serializeUser(function (user, cb) {
//     cb(null, user.id);
// });

// passport.deserializeUser(function (id, cb) {
//     users.findById(id, function (err, user) {
//         if (err) { return cb(err); }
//         cb(null, user);
//     });
// });

app.use(passport.initialize());
// app.post('/login', passport.authenticate('local', { successRedirect: '/private', failureRedirect: '/', session: false }));
app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err)
            res.render('home', { err: err });
        else if (!user)
            res.render('home', { err: 'authentication error' });
        else
            res.render('private', user);
    })(req, res, next);
});

app.listen(3000, (req, res) => {
    console.log('server is listening on port 3000');
})
