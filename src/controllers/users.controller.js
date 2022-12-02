const db = require('../database/models/index');

const controller = {
    register: (req,res) => {
        return res.redirect('/')
    },
    login: (req,res) => {
        return res.redirect('/')
    },
}

module.exports = controller;