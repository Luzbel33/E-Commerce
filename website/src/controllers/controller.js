const path = require('path');

const homeView = (req, res) => {
    res.render(path.join(__dirname, '../views/Home.ejs'));
};

const detailProd = (req, res) => {
    res.render(path.join(__dirname, '../views/Detail_Product.ejs'));
};

const cartView = (req, res) => {
    res.render(path.join(__dirname, '../views/Cart.ejs'));
};

const loginView = (req, res) => {
    res.render(path.join(__dirname, '../views/Login.ejs'));
};

const registerView = (req, res) => {
    res.render(path.join(__dirname, '../views/Register.ejs'));
};

module.exports = { 
    homeView,
    detailProd,
    cartView,
    loginView,
    registerView
};