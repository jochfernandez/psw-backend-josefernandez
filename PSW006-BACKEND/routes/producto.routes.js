const productoCtrl = require("../controllers/producto.controller");
const express = require('express');
const router = express.Router();

router.post('/producto', productoCtrl.postProducto);
router.get('/producto', productoCtrl.getProductos);
router.delete('/producto/:id', productoCtrl.deleteProducto);
router.patch('/producto/:id', productoCtrl.patchProducto);
router.put('/producto/:id', productoCtrl.putProducto);
router.get('/productoDestacado', productoCtrl.getProductosDestacados);

module.exports = router;