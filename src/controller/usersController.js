const bcryptjs = require('bcryptjs');
const fs = require('fs');
const usersJSON = require('../data/users.json');
const { validationResult } = require('express-validator');

const User = require('../models/User');

const controller = {

    register: (req, res)=> {
        return res.render('register');
        
    },

    processRegister: (req,res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('register', {
              errors: resultValidation.mapped(),
              oldData: req.body
            });
          }
          let userInDB = User.findByField('email', req.body.email);
          if(userInDB){
            return res.render('register', {
              errors: {
                email: {
                  msg: 'Este email ya esta registrado'
                }
              },
              oldData: req.body
            });
            }
            let userToCreate = {
                ...req.body,
                //  password: bcryptjs.hashSync(req.body.password, 10),
               
                avatar: req.file.fileName
                }

                let userCreated = User.create(userToCreate);
                return res.redirect('/user/login');
            


    },

    login: (req, res)=> {
        res.render('login');
        
    },

    //Proceso de Login
    processLogin: (req,res) => {
        const userToLogin = User.findByField('userName', req.body.email);
        if(userToLogin){
            const passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(passwordOk){
                // delete userToLogin.password;

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
    }

    
}

module.exports = controller;