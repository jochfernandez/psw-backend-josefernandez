const espectadorCtrl = require('../controllers/espectador.controller');
const express = require('express');
const router = express.Router();

router.post('/espectador', espectadorCtrl.postEspectador);
router.get('/espectador', espectadorCtrl.getEspectadores);
router.get('/espectador/:id', espectadorCtrl.getEspectador);

module.exports = router;