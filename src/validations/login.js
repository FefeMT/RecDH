const db = require('../database/models/index');
const {body} = require('express-validator');

let email = body('email').notEmpty().withMessage('Complete el campo de Email').bail().isEmail().withMessage('Email invalido').bail().custom((value) => {
    return db.user.findOne({where:{email:value}}).then(user => {
        if (!user) {
          return Promise.reject('Ususario no encontrado');
        }
    });
})
let password = body('password').notEmpty().withMessage('Complete el campo de Contraseña').bail().isLength({min:6}).withMessage('La contraseña debe tener al menos 6 caracteres').bail().custom((value,{req}) => {
    return db.user.findOne({where:{email:req.body.email}}).then(user => {
        if (!user) {
          return Promise.reject('Ususario no encontrado');
        }
        if (user.password != value) {
            return Promise.reject('Contraseña incorrecta');
        }
    });
});

let lValidator = [email,password];

module.exports = lValidator;