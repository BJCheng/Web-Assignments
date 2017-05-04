const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const static = express.static(__dirname + '/public');
const bodyParser = require('body-parser');

var configRoutes = require('./routes');

app.use(bodyParser.json());
app.use('/public', static);
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// configRoutes(app);
app.get('/', (req, res)=>{
    res.send('get');
});
app.post('/', (req, res)=>{
    res.send('post');
});

app.listen(3000, ()=>{
    console.log('server listening on port 3000');
});