const moongose = require('mongoose');
const { Schema } = moongose;

const TransaccionSchema = new Schema({
    monedaOrigen : { type: String, required: true },
    cantidadOrigen : { type: Number, required: true },
    monedaDestino : { type: String, required: true },
    cantidadDestino : { type: Number, required: true },
    emailCliente : { type: String, required: true },
    tasaConversion : { type: Number, required: true },
});

module.exports = moongose.model('Transaccion', TransaccionSchema) || moongose.models.Transaccion;