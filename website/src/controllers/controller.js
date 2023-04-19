const path = require('path');
const { getProds } = require('../services/ProdAccess');
const { validationResult }  = require('express-validator');
const { getUsers, writeUser, findUserByMail} = require('../services/UserAccess');
const bcrypt = require('bcrypt');

const homeView = (req, res) => {
    const prods = getProds();
    res.render(path.join(__dirname, '../views/Home.ejs'), { prods });
};

const detailProd = (req, res) => {
    const prods = getProds();
    const prod = prods.find(prod => prod.id == req.params.id);
    res.render(path.join(__dirname, '../views/Detail_Product.ejs'), { prod });
};

const cartView = (req, res) => {
    const prods = getProds();
    res.render(path.join(__dirname, '../views/Cart.ejs'), { prods: prods.slice(0,2) });
};

const loginView = (req, res) => {
    res.render(path.join(__dirname, '../views/Login.ejs'));
};

const registerView = (req, res) => {
    res.render(path.join(__dirname, '../views/Register.ejs'));
};

const addUser = (req, res) => { 
    const errors = validationResult(req);
                if(!errors.isEmpty()) {
                    res.status(422).json({
                        errors: errors.array()
                    })
                };
    const users = getUsers();
    const maxID = users.length + 1;
    const pass = bcrypt.hashSync("users.password", 10)

    const newUser = {
        id: maxID,
        name: req.body.name,
        username: req.body.username,
        country: req.body.country,
        phone: req.body.phone,
        email: req.body.email,
        password: pass
    }
    users.push(newUser);
    writeUser(users);
    res.redirect('/')
};

const login = (req, res) => {
    const errors = validationResult(req);
                if(!errors.isEmpty()) {
                    res.status(422).json({
                        errors: errors.array()
                    })
                };
    let { email, password } = req.body;
    const user = findUserByMail(email);
    if (user.email === email && bcrypt.compareSync(password, user.password)) {
        req.session.email = email
        res.redirect('/')
    } else {
        res.send('Correo o contraseña incorrectos')
    };
};

const logout = (req, res) => {
    req.session.destroy();
    res.clearCookie('nuevo');
    res.redirect('/');
};

module.exports = { 
    homeView,
    detailProd,
    cartView,
    loginView,
    registerView,
    addUser,
    loginView,
    login,   
    logout
};