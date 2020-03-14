const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', function(req, res){
  const identification = req.query.identification
  controller
    .getUser(identification)
    .then((user) => {
      response.success(req, res, user)
    })
    .catch((mensaje) => {
      response.error(req, res, mensaje,`Could not get the user [id]: ${idUser}`);
    })
});

router.post('/', function(req, res){
  controller
    .addUser(req.body.identification, req.body.firstName, req.body.lastName, req.body.profile)
    .then((user) => {
      response.success(req, res, user)
    })
    .catch((mensaje) => {
      response.error(req, res, mensaje, `Could not add the user ${req.body.name}`)
    })
});

router.delete('/:identification', function(req, res){
  controller
    .deleteUser(req.params.identification)
    .then(() => {
      response.success(req, res, `User [id]: ${req.params.identification} deleted succesfully`)
    })
    .catch((mensaje) => {
      response.error(req, res, mensaje,`Could not delete the user [id]: ${req.params.identification}`)
    })
});

router.patch('/:identification', function(req, res){
  controller
    .updateUser(req.params.identification, req.body.name)
    .then((user) => {
      response.success(req, res, user)
    })
    .catch((mensaje) => {
      response.error(req, res, mensaje,`Could not update the user [id]: ${req.params.identification}`)
    })
});

module.exports = router;
