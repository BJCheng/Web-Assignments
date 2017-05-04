let login = require('./login');
let home = require('./home');
let privateRouter = require('./private');

let configRoutes = (app) => {
    app.use('/', home);
    
    //app.use('/login', login);

    app.use('/private', privateRouter);

    app.get('/success', (req, res)=>{
        res.send('success');
    });
    app.get('/failure', (req, res)=>{
        res.send('failure');
    });
};


module.exports = configRoutes;