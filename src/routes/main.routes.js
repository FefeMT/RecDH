const express = require('express');
const router = express.Router();
const controller = require('../controllers/main.controller');

router.get('/', controller.home);
router.get('/add', controller.create);
router.post('/add',controller.add);
router.post('/delete/:id',controller.borrar);
router.post('/edit/:id',controller.save);
router.get('/edit/:id', controller.edit);
router.get('/:id', controller.detail);
module.exports = router;