const Espectador = require('../models/espectador');
const espectadorCtrl = {};

espectadorCtrl.postEspectador = async (req, res) => {
    const espectador  = new Espectador(req.body);
    try{
        await espectador.save();
        res.json({
            'status': '1',
            'msg': 'Espectador guardado.'
        });
    }catch (error){
        res.status(400).json({
            'status' : '0',
            'msg': 'No se pudo guardar el espectador.'
        })
    }
}

espectadorCtrl.getEspectadores = async (req, res) => {
    try{
        const espectadores = await Espectador.find();
        res.json(espectadores);
    }catch (error){
        res.status(500).json({
            'status' : '0',
            'msg': 'Error al recuperar los espectadores.'
        });
    }

}

espectadorCtrl.getEspectador = async (req, res) => {
    try{
        const espectador = await Espectador.findById(req.params.id);
        res.json(espectador);
    }catch (error){
        res.status(500).json({
            'status' : '0',
            'msg': 'Error al recuperar el espectador.'
        });
    }
}

module.exports = espectadorCtrl;