const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.post('/', function(req, res){
  controller
    .addUser(req.body.identification, req.body.firstName, req.body.lastName, req.body.profile)
    .then((user) => {
      response.success(req, res, user)
    })
    .catch((mensaje) => {
      response.error(req, res, mensaje, `Could not add the user ${req.body.firstName}`)
    })
});

router.get('/', function(req, res){
  const identification = req.query.identification
  controller
    .getUser(identification)
    .then((user) => {
      response.success(req, res, user)
    })
    .catch((mensaje) => {
      response.error(req, res, mensaje,`Could not get the user [id]: ${identification}`);
    })
});

router.patch('/:identification', function(req, res){
  const identification = req.params.identification
  controller
    .updateUser(identification, req.body.firstName, req.body.lastName)
    .then((user) => {
      response.success(req, res, user)
    })
    .catch((mensaje) => {
      response.error(req, res, mensaje,`Could not update the user [id]: ${identification}`)
    })
});

router.delete('/:identification', function(req, res){
  const identification = req.params.identification
  controller
    .deleteUser(identification)
    .then(() => {
      response.success(req, res, `User [id]: ${identification} deleted succesfully`)
    })
    .catch((mensaje) => {
      response.error(req, res, mensaje,`Could not delete the user [id]: ${identification}`)
    })
});

module.exports = router;