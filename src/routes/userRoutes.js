const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const { body, check } = require('express-validator');

const usersController = require('../controller/usersController');

const validations = [
    
]

//Formulario de registro
router.get('/register', usersController.register);

//Procesamiento del registro

//Formulario de Login
router.get('/login', usersController.login);

//Procesamiento de Login
router.post('/login', [
    check('userName').notEmpty().withMessage('Tienes que ingresar un nombre de usuario'),
    check('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
    ],usersController.processLogin);

    module.exports = router;