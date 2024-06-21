const Ticket = require('../models/ticket');
const ticketCtrl = {};

ticketCtrl.postTicket = async (req, res) => {
    const ticket = new Ticket(req.body);
    try{
        await ticket.save();
        res.json({
            'status': '1',
            'msg': 'Ticket guardado.'
        });
    }catch (error){
        res.status(400).json({
            "error": error,
            'status' : '0',
            'msg': 'No se pudo guardar el Ticket.'
        })
    }
}

ticketCtrl.getTickets = async (req, res) => {
    try{
        const tickets = await Ticket.find();
        res.json(tickets);
    }catch (error){
        res.status(500).json({
            'status' : '0',
            'msg': 'Error al recuperar los tickets.'
        });
    }
}

ticketCtrl.deleteTicket = async (req, res) => {
    try{
        await Ticket.deleteOne({_id: req.params.id});
        res.json({
            status: '1',
            msg: 'Producto eliminado.'
        });
    }catch (error){
        res.status(400).json({
            status: '0',
            msg: 'No se pudo eliminar el producto.'
        });
    }
}

ticketCtrl.patchTicket = async (req, res) => {
    try{
        await Ticket.updateOne({_id: req.params.id}, req.body);
        res.json({
            status: '1',
            msg: 'Producto actualizado.'
        });
    }catch (error){
        res.status(400).json({
            status: '0',
            msg: 'No se pudo actualizar el producto.'
        });
    }
}

ticketCtrl.putTicket = async (req, res) => {
    try{
        await Ticket.updateOne({_id: req.params.id}, req.body);
        res.json({
            status: '1',
            msg: 'Producto actualizado.'
        });
    }catch (error){
        res.status(400).json({
            status: '0',
            msg: 'No se pudo actualizar el producto.'
        });
    }
}

ticketCtrl.getTicketsPorCategoria = async (req, res) => {
    try{
        const tickets = await Ticket.find({categoria: req.params.categoria});
        res.json(tickets);
    }catch (error){
        res.status(500).json({
            'status' : '0',
            'msg': 'Error al recuperar los tickets.'
        });
    }
}

module.exports = ticketCtrl;
