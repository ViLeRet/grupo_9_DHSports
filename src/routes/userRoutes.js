const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

const { body, check } = require('express-validator');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../images/avatars');
    },
    filename: (req, file, cb) => {
        const fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
})

const uploadFile = multer({ storage });

const usersController = require('../controller/usersController');

const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('email').notEmpty().withMessage('Tienes que escribir un email').bail()
        .isEmail().withMessage('Debes escribir un formato de correo valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('country').notEmpty().withMessage('Tienes que seleccionar un pais'),
    body('avatar').custom((value, { req }) => {
        const file = req.file;
        const acceptedExtensions = ['.jpg', '.png', '.gif'];
        if (!file) {
            throw new Error('Tienes que subir una imagen')
        } else {
            const fileExtensions = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtensions)) {
                throw new Error('Las extensiones de archivo permitidas son ' + [acceptedExtensions].join(', '));

            }
        }
        return true;
    })
    
]

//Formulario de registro
router.get('/register', guestMiddleware,usersController.register);

//Procesamiento del registro
router.post('/register',uploadFile.single('avatar'), validations, usersController.processRegister);

//Formulario de Login
router.get('/login',guestMiddleware, usersController.login);

//Procesamiento de Login
router.post('/login', [
    check('email').isEmail().withMessage('Email invalido'),
    check('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
    ],usersController.processLogin);

    module.exports = router;