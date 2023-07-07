const bcryptjs = require('bcryptjs');
const fs = require('fs');
const usersJSON = require('../data/users.json');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const sequelize = db.Sequelize;
const { Op } = require('sequelize');
const { log } = require('console');

// const User = require('../models/User');
// const User = db.User;

const controller = {

  register: (req, res) => {
    return res.render('register');

  },
  // Prueba para la DB
  create: 
      async function(req, res) {
        let resultValidation = validationResult(req);
     if (resultValidation.errors.length > 0) {
       return res.render('register', {
         errors: resultValidation.mapped(),
         oldData: req.body
       });
     }
     let userInDB = await db.User.findOne({where:{'email': req.body.email}});
     if (userInDB) {
       return res.render('register', {
         errors: {
           email: {
             msg: 'Este email ya está registrado'
           }
         },
         oldData: req.body
       });
     }
        console.log(req.file);
        db.User
          .create(
            {
              email: req.body.email,
              name: req.body.name,
              password: bcryptjs.hashSync(req.body.password, 10),
              country: req.body.country,
              avatar: req.file? req.file.filename: 'default.jpg'
            }
          )
          .then(() => {
            return res.redirect('/user/login')})
          .catch(error => res.send(error))
      },
  
     processRegister: (req, res) => {
     let resultValidation = validationResult(req);
     if (resultValidation.errors.length > 0) {
       return res.render('register', {
         errors: resultValidation.mapped(),
         oldData: req.body
       });
     }
     let userInDB = User.findByField('email', req.body.email);
     if (userInDB) {
       return res.render('register', {
         errors: {
           email: {
             msg: 'Este email ya está registrado'
           }
         },
         oldData: req.body
       });
     }
     let userToCreate = {
       ...req.body,
       password: bcryptjs.hashSync(req.body.password, 10),
       avatar: req.file.fileName
     }

     let userCreated = User.create(userToCreate);
     return res.redirect('/user/login');
   },

  login: (req, res) => {
    res.render('login');

  },

  //Proceso de Login
  processLogin: (req, res) => {
    let userToLogin = db.User.findOne('email', req.body.email);
    if (userToLogin) {
      let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password);
     
      if (passwordOk) {
        // delete userToLogin.password;
        req.session.userLogged = userToLogin;
        return res.send('Te logueaste!!');
        //cuando el metodo este creado -> redirigir a profile
      }
      return res.render('login', {
        errors: {
          email: {
            msg: 'Las credenciales son invalidas'
          }
        }
      })
    }
    return res.render('login', {
      errors: {
        email: {
          msg: 'No se encuentra este email en nuestra base de datos'
        }
      }
    })
  }
  
  
}

module.exports = controller;