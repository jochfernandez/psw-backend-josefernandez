const moongose = require('mongoose');
const { Schema } = moongose;

const ProductoSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen : { type: String, required: true },
    precio: { type: Number, required: true },
    stock : { type: Number, required: true },
    destacado : { type: Boolean, required: true }
});
module.exports = moongose.model('Producto', ProductoSchema) || moongose.models.Producto;