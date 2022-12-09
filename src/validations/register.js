const db = require('../database/models/index');
const {body} = require('express-validator');

let name = body('name').notEmpty().withMessage('Complete el campo de Nombre').bail().isLength({max:50}).withMessage('Nombre demaciado largo')
let email = body('email').notEmpty().withMessage('Complete el campo de Email').bail().isEmail().withMessage('Email invalido').bail().custom((value) => {
    return db.user.findOne({where:{email:value}}).then(user => {
        if (user) {
          return Promise.reject('Ususario ya registrado');
        }
    })
})
let password = body('password').notEmpty().withMessage('Complete el campo de Contraseña').bail().isLength({min:6}).withMessage('La contraseña debe tener al menos 6 caracteres');

let rValidator = [name,email,password];

module.exports = rValidator;