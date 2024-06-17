const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database');
var app = express();
//middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

// Cargamos el modulo de direccionamiento de rutas
app.use('/api/producto', require('./routes/producto.routes'));
app.use('/api/ticket', require('./routes/ticket.routes'));
app.use('/api/espectador', require('./routes/espectador.routes'));
app.use('/api/transaccion', require('./routes/transaccion.routes'));

//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
    console.log(`El servicio esta iniciado en el puerto `, app.get('port'));
});