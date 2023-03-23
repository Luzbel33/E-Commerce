const express = require('express');
const path = require('path');
const port = 3000
const routes = require('./routes/index');

const app = express(); 

app.set('views', path.resolve(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));
routes(app);

app.listen(port, () => {
    console.log('listening on port ${port}');
});

