const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', function(req, res){
  const filterCategory = req.query.idCategory
  controller
    .getProductByCategory(filterCategory)
    .then((messageList) => {
      response.success(req, res, messageList)
    })
    .catch((mensaje) => {
      response.error(req, res, mensaje,'Verificar el detalle del error por consola');
    })
});

router.post('/', function(req, res){
  controller
    .addProduct(req.body.idCategory, req.body.name)
    .then((fullProduct) => {
      response.success(req, res, fullProduct)
    })
    .catch((mensaje) => {
      response.error(req, res, mensaje,'Verificar el detalle del error por consola')
    })
});

router.delete('/:id', function(req, res){
  controller
    .deleteProduct(req.params.idProduct)
    .then(() => {
      response.success(req, res, `Product [id]: ${req.params.id} deleted succesfully`)
    })
    .catch((mensaje) => {
      response.error(req, res, mensaje,`No se pudo eliminar el mensaje del [id]: ${req.params.id}`)
    })
});

router.patch('/:id', function(req, res){
  controller
    .updateProduct(req.params.idProduct, req.body.name)
    .then((data) => {
      response.success(req, res, data)
    })
    .catch((mensaje) => {
      response.error(req, res, mensaje,`Could not update the product [id]: ${req.params.id}`)
    })
});

module.exports = router;
