const usersController = require('../controllers/controller');
const { check } = require('express-validator')

module.exports = function(app) {

    app.get('/', usersController.homeView);

    app.get('/detailProduct/:id', usersController.detailProd);

    app.get('/cart', usersController.cartView);

    app.get('/login', usersController.loginView);

    app.get('/register', usersController.registerView);

    app.post('/addUser',
    [
    check ('name')
        .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),

    check ('username')
        .isLength({ min: 3 }).withMessage('El usuario debe tener al menos 3 caracteres'),

    check ('email')
        .isEmail().withMessage('Correo invalido')

    ], usersController.addUser)

    app.post('/login', 
    [
        check ('e-mail')
            .isEmail().withMessage('Correo invalido'),
    ],usersController.login)

    app.use((req, res) => {
        res.status(404).withMessage("ERROR: Pagina no encontrada");
        });
};