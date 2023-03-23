const usersController = require('../controllers/controller');

module.exports = function(app) {

    app.get('/', usersController.homeView);

    app.get('/detailProduct', usersController.detailProd);

    app.get('/cart', usersController.cartView);

    app.get('/login', usersController.loginView);

    app.get('/register', usersController.registerView);

};