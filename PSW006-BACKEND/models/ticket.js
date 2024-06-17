const moongose = require('mongoose');
const { Schema } = moongose;

const TicketSchema = new Schema({
    precioTicket : { type: Number, required: true },
    categoriaEspectador : { type: String, required: true },
    fechaCompra : { type: String, required: true },
    espectador : { type: Schema.Types.ObjectId, ref: 'Espectador' , required: true},
});
module.exports = moongose.model('Ticket', TicketSchema) || moongose.models.Ticket;