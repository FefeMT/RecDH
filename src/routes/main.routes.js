const express = require('express');
const router = express.Router();
const controller = require('../controllers/main.controller');
const validations = require('../validations/moviesValidator');

router.get('/', controller.home);
router.get('/add', controller.create);
router.post('/add', validations, controller.add);
router.get('/edit/:id', controller.edit);
router.put('/edit/:id', validations, controller.save);
router.delete('/delete/:id', controller.borrar);
router.get('/:id', controller.detail);
module.exports = router;