var express = require('express');
var router = express.Router();
const userValidate = require('../validations/userValidate.js');
const { index, login, mensaje, logout} = require('../controllers/userController.js');

router.get('/', index);
router.post('/', userValidate, login);

router.get('/mensaje', mensaje);

router.get('/logout', logout);

module.exports = router;