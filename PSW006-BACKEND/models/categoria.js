const moongose = require('mongoose');
const { Schema } = moongose;

const CategoriaSchema = new Schema({
    nombre : { type: String, required: true },
    descripcion : { type: String, required: true },
});

module.exports =  moongose.model('Categoria', CategoriaSchema) || moongose.models.Categoria;