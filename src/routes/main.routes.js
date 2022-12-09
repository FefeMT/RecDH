const express = require('express');
const router = express.Router();
const controller = require('../controllers/main.controller');
const validations = require('../validations/moviesValidator');
const isAdmin = require('../middlewares/isAdmin');

router.get('/', controller.home);
router.get('/add', isAdmin, controller.create);
router.post('/add', validations, controller.add);
router.get('/edit/:id', isAdmin, controller.edit);
router.put('/edit/:id', validations, controller.save);
router.delete('/delete/:id', isAdmin, controller.borrar);
router.get('/detail/:id', controller.detail);

module.exports = router;