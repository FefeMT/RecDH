const {body} = require('express-validator');

let title = body('title').notEmpty().withMessage('Complete el campo de Titulo').bail().isLength({max:499}).withMessage('Titulo demaciado largo');
let rating = body('rating').notEmpty().withMessage('Complete el campo de Puntaje').bail().isDecimal().withMessage('Ingrese in valor Numerico').bail().custom((value) => {
    if (value < 0 || value > 10){
        return Promise.reject('Ingrese un numero entre el 0 y el 10');
    }
    return true
});
let awards = body('awards').notEmpty().withMessage('Complete el campo de Premios').bail().isInt().withMessage('Ingrese in valor Numerico').bail().custom((value) => {
    if (value < 0 || value > 99){
        return Promise.reject('Ingrese un numero entre el 0 y el 99');
    }
    return true
});
let release_date = body('release_date').notEmpty().withMessage('Complete el campo de Fecha de estreno').bail().isDate().withMessage('Ingrese una Fecha');
let length = body('length').notEmpty().withMessage('Complete el campo de Duracion').bail().custom((value) => {
    if (value < 0 || value > 999){
        return Promise.reject('Ingrese un numero entre el 0 y el 999');
    }
    return true
});;

let validations = [title,rating,awards,release_date,length];
module.exports = validations;