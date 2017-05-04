var router = require('express').Router();

router.get('/', (req, res) => {
    //if authenticate
    //app.render('private');
    //if not
    res.render('home');
})

module.exports = router;