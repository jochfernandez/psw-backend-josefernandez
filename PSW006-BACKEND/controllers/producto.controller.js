const Producto = require('../models/producto');
const productoCtrl = {};

productoCtrl.postProducto = async (req, res) => {
    const producto = new Producto(req.body);
    try{
        await producto.save();
        res.json({
            'status': '1',
            'msg': 'Producto guardado.'
        });
    }catch (error){
        res.status(400).json({
            'status' : '0',
            'msg': 'No se pudo guardar el producto.'
        })
    }
}

productoCtrl.getProductos = async (req, res) => {
    try{
        const productos = await Producto.find();
        res.json(productos);
    }catch (error){
        res.status(500).json({
            'status' : '0',
            'msg': 'Error al recuperar los Productos.'
        });
    }
}

productoCtrl.deleteProducto = async (req, res) => {
    try{
        await Producto.deleteOne({_id: req.params.id});
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
// Modificar
// Patch
productoCtrl.patchProducto = async (req, res) => {
    try{
        await Producto.updateOne({_id: req.params.id}, req.body);
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
// Put
productoCtrl.putProducto = async (req, res) => {
    try{
        await Producto.updateOne({_id: req.params.id}, req.body);
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

productoCtrl.getProductosDestacados = async (req, res) => {
    try{
        const productos = await Producto.find({destacado: true});
        res.json(productos);
    }catch (error){
        res.status(500).json({
            'status' : '0',
            'msg': 'Error al recuperar los productos si es destacado.'
        });
    }
}

module.exports = productoCtrl;