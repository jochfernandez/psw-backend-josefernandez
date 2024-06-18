const categoriaCtrl = require('../controllers/categoria.controller');
const express = require('express');
const router = express.Router();

router.post('/categoria', categoriaCtrl.postCategoria);
router.get('/categoria', categoriaCtrl.getCategoria);

module.exports = router;