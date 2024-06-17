const Transaccion = require('../models/transaccion');
const transaccionCtrl = {};

transaccionCtrl.postTransaccion = async (req, res) => {
    const transaccion = new Transaccion(req.body);
    try{
        await transaccion.save();
        res.json({
            'status': '1',
            'msg': 'Transaccion guardada.'
        });
    }catch (error){
        res.status(400).json({
            'status' : '0',
            'msg': 'No se pudo guardar la transaccion.'
        })
    }
}

transaccionCtrl.getTransacciones = async (req, res) => {
    try{
        const transacciones = await Transaccion.find();
        res.json(transacciones);
    }catch (error){
        res.status(500).json({
            'status' : '0',
            'msg': 'Error al recuperar las transacciones.'
        });
    }

}

transaccionCtrl.getTransacciones = async (req, res) => {
    try{
        const transacciones = await Transaccion.find({emailCliente: req.params.email});
        res.json(transacciones);
    }catch (error){
        res.status(500).json({
            'status' : '0',
            'msg': 'Error al recuperar las transacciones.'
        });
    }
}

transaccionCtrl.getTransacciones = async (req, res) => {
    const { monedaOrigen, monedaDestino } = req.params;
    try{
        const transacciones = await Transaccion.find({monedaOrigen, monedaDestino});
        res.json(transacciones);
    }catch (error){
        res.status(500).json({
            'status' : '0',
            'msg': 'Error al recuperar las transacciones.'
        });
    }
}

module.exports = transaccionCtrl;
