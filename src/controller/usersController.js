const bcryptjs = require('bcryptjs');
const fs = require('fs');
const usersJSON = require('../data/users.json');
const { validationResult } = require('express-validator');

const User = require('../models/User');

const controller = {
    login: (req, res)=> {
        res.render('login');
        
    const userToCreate = {
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10)
    }

    const userCreated = USer.create(userToCreate);
    return res.redirect('/user/login');
    },

    //Proceso de Login
    processLogin: (req,res) => {
        const userToLogin = User.findByField('userName', req.body.userName);
        if(userToLogin){
            const passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if(passwordOk){
                delete userToLogin.password;

                req.session.userLogged = userToLogin;
                return res.send('Te logueaste!!');
                //cuando el metodo este creado -> redirigir a profile
            }
            return res.render('login', {
                errors: {
                  userName: {
                    msg: 'Las credenciales son invalidas'
                  }
                }
              })
        }
    },

    register: (req, res)=> {
        res.render('register');
        
    },
}

module.exports = controller;