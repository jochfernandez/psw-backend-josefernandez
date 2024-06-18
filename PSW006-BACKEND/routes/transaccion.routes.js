const transaccionCtrl = require('../controllers/transaccion.controller');
const express = require('express');
const router = express.Router();
router.post('/transaccion', transaccionCtrl.postTransaccion);
router.get('/transaccion', transaccionCtrl.getTodasTransacciones);
router.get('/transaccion/:email', transaccionCtrl.getTransaccionesPorEmail);
router.get('/transaccionPorMonedas/:monedaOrigen,:monedaDestino', transaccionCtrl.getTransaccionesPorMonedas);
module.exports = router;