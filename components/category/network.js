const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', function(req, res){
  controller
    .getCategories()
    .then((Categories) => {
      response.success(req, res, Categories)
    })
    .catch((mensaje) => {
      response.error(req, res, mensaje,'Verificar el detalle del error por consola');
    })
});

router.post('/', function(req, res){
  controller
    .addCategory(req.body.name)
    .then((fullCategory) => {
      response.success(req, res, fullCategory)
    })
    .catch((mensaje) => {
      response.error(req, res, mensaje,'Verificar el detalle del error por consola')
    })
});

router.delete('/:id', function(req, res){
  controller
    .deleteCategory(req.params.id)
    .then(() => {
      response.success(req, res, `Category [id]: ${req.params.id} deleted succesfully`)
    })
    .catch((mensaje) => {
      response.error(req, res, mensaje,`No se pudo eliminar el mensaje del [id]: ${req.params.id}`)
    })
});

router.patch('/:id', function(req, res){
  controller
    .updateCategory(req.params.id, req.body.name)
    .then((data) => {
      response.success(req, res, data)
    })
    .catch((mensaje) => {
      response.error(req, res, mensaje,`Could not update the product [id]: ${req.params.id}`)
    })
});

module.exports = router;
