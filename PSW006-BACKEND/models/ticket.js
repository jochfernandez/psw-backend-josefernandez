const moongose = require('mongoose');
const { Schema } = moongose;

const categoriaEspectadorEnum = {
    values: ['E', 'L'],
    message: '{VALUE} no es una categoria de espectador permitida'
};
const TicketSchema = new Schema({
    precioTicket : { type: Number, required: true },
    categoriaEspectador : { type: String, required: true },
    fechaCompra : { type: String, required: true },
    espectador : { type: Schema.Types.ObjectId, ref: 'Espectador' , required: true},
    categoria : { type: categoriaEspectadorEnum, required: true }
});
module.exports = moongose.model('Ticket', TicketSchema) || moongose.models.Ticket;