const express = require('express');
const router = express.Router();
const controller = require('../controllers/users.controller');
const rValidator = require('../validations/register');
const lValidator = require('../validations/login');

router.get('/register', controller.register);
router.post('/register', rValidator, controller.save);
router.get('/login', controller.login);
router.post('/login', lValidator, controller.access);
router.get('/logout', controller.logout);


module.exports = router;