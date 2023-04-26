const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session  = require('express-session');
const express = require('express');
const path = require('path');
const port = 3000;
const routes = require('./routes/index');
const mins15 = 15 * 60 * 1000
const morgan = require('morgan');

const app = express(); 

app.use(session({
    name: 'nuevo',
    secret: '123456',
    saveUninitialized: false,
    cookie: { maxAge: mins15 },
    resave: false
}));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
    });
    
app.use(cookieParser());

app.set('views', path.resolve(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../public')));

routes(app);

app.listen(port, () => {
    console.log('listening on port ${port}');
});

