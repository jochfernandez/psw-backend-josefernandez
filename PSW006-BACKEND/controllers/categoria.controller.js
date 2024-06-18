const Categoria= require('../models/categoria');
const categoriaCtrl = {};

categoriaCtrl.postCategoria = async (req, res) => {
    const categoria  = new Categoria(req.body);
    try{
        await categoria.save();
        res.json({
            'status': '1',
            'msg': 'Categoria guardada.'
        });
    }catch (error){
        res.status(400).json({
            'status' : '0',
            'msg': 'No se pudo guardar la categoria.'
        })
    }
}
categoriaCtrl.getCategoria = async (req, res) => {
    try{
        const categorias = await Categoria.find();
        res.json(categorias);
    }catch (error){
        res.status(500).json({
            'status' : '0',
            'msg': 'Error al recuperar las categorias.'
        });
    }
}

module.exports = categoriaCtrl;