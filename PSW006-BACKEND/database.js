const mongoose = require('mongoose');
const URI = 'mongodb://localhost/psw006';
mongoose.connect(URI)
    .then(db=>console.log('Base de Datos en linea'))
    .catch(err=>console.error(err))
module.exports = mongoose;