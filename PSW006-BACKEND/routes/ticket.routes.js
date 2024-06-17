const ticketCtrl = require('../controllers/ticket.controller');
const express = require('express');
const router = express.Router();

router.post('/ticket', ticketCtrl.postTicket);
router.get('/ticket', ticketCtrl.getTickets);
router.delete('/ticket/:id', ticketCtrl.deleteTicket);
router.patch('/ticket/:id', ticketCtrl.patchTicket);
router.put('/ticket/:id', ticketCtrl.putTicket);
router.get('/ticket/:categoria', ticketCtrl.getTickets);

module.exports = router;