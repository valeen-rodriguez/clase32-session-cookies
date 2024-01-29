const {body} = require("express-validator");

const userValidate = [
    body('name')
    .notEmpty().withMessage('Completar el nombre').bail()
    .isLength({ min: 3 }).withMessage('Debe tener al menos 3 caracteres'),

    body('email')
    .notEmpty().withMessage('Completar el email').bail()
    .isEmail().withMessage('Debe poner un email'),

    body('email')
    .notEmpty().withMessage('Completar el color').bail(),

    body('edad')
    .notEmpty().withMessage('Completar la edad').bail()
    .isInt().withMessage('Debe colocar números')
];

module.exports = userValidate;