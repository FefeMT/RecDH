const db = require('../database/models/index');
const {hashSync} = require('bcrypt');
const {validationResult} = require('express-validator');

const controller = {
    register: (req,res) => { 
        return res.render('register');
    },
    login: (req,res) => {
        return res.render('login')
    },
    save: (req,res) => {
        let results = validationResult(req)
        if (!results.isEmpty()) {
            let errors = results.mapped()
            res.render('register', {errors: errors, data: req.body})
        } else {
            let create = db.user.create({
                name: req.body.name,
                email: req.body.email,
                password: hashSync(req.body.password, 10),
                rol: 0
            })
            const success = user => res.redirect('/')
            const error = error => res.send(error)
            return create.then(success).catch(error);
        }
    },
    access: (req,res) => {
        let results = validationResult(req)
        if (!results.isEmpty()) {
            let errors = results.mapped()
            res.render('login', {errors: errors, data: req.body})
        }
        res.cookie('user', req.body.email, {maxAge: 1000 * 60 * 60 * 8})
        const one = db.user.findOne({where:{email:req.body.email}})
        const find = one => req.session.user = one
        const success = user => res.redirect('/')
        const errors = error => res.send(error)
        return one.then(find).then(success).catch(errors);
    },
    logout: (req,res) => {
        delete req.session.user
        res.cookie('user',null,{maxAge: -1})
        return res.redirect('/');
    }
}

module.exports = controller;