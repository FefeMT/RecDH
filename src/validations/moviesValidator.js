const {body} = require('express-validator');

let title = body('title').notEmpty().withMessage('Complete el campo de Titulo').bail().isLength({max:499}).withMessage('Titulo demaciado largo');
let rating = body('rating').notEmpty().withMessage('Complete el campo de Puntaje').bail().isDecimal().withMessage('Ingrese in valor Numerico').bail().isLength({min:1,max:2}).withMessage('Ingrese un numero entre el 0 y el 10');
let awards = body('awards').notEmpty().withMessage('Complete el campo de Premios').bail().isInt().withMessage('Ingrese in valor Numerico').bail().isLength({min:1,max:3}).withMessage('Ingrese un numero entre el 0 y el 999');
let release_date = body('release_date').notEmpty().withMessage('Complete el campo de Fecha de estreno').bail().isDate().withMessage('Ingrese una Fecha');
let length = body('length').isLength({min:1,max:3}).withMessage('Ingrese un valor entre 0 y 999');

let validations = [title,rating,awards,release_date,length];
module.exports = validations;