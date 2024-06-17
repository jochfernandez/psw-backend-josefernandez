const transaccionCtrl = require('../controllers/transaccion.controller');
const express = require('express');
const router = express.Router();

router.post('/transaccion', transaccionCtrl.postTransaccion);
router.get('/transaccion', transaccionCtrl.getTransacciones);
router.get('/transaccion/:email', transaccionCtrl.getTransacciones);
router.get('/transaccion/:monedaOrigen,:monedaDestino', transaccionCtrl.getTransacciones);

module.exports = router;