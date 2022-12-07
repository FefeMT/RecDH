const express = require('express');
const router = express.Router();
const controller = require('../controllers/users.controller');
const validator = require('../validations/register');

router.get('/register', controller.register);
router.post('/register', validator, controller.save);
router.get('/login', controller.login);
router.post('/login', validator, controller.access);
router.get('/logout', controller.logout);

module.exports = router;