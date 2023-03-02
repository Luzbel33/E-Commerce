const express = require('express');
const app = express();


app.get('/', function (req, res) {
    res.send('estoy en home');
});
app.get('/product-detail', function (req, res) {
    res.send('estoy en product detail');
});
app.get('/login', function (req, res) {
    res.send('estoy en login');
});
app.get('/register', function (req, res) {
    res.send('estoy en register');
});
app.get('/cart', function (req, res) {
    res.send('estoy en cart');
});