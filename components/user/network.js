const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.post('/signup/', function(req, res){
  controller
    .addUser(req.body.identification, req.body.firstName, req.body.lastName, req.body.profile, req.body.email, req.body.password)
    .then((user) => {
      response.success(req, res, user)
    })
    .catch((mensaje) => {
      response.error(req, res, mensaje, `Could not add the user ${req.body.firstName}`)
    })
});

router.get('/signin/', function(req, res){
  controller
    .signIn(req.body.email, req.body.password)
    .then((user) => {
      response.success(req, res, user)
    })
    .catch((mensaje) => {
      response.error(req, res, mensaje,`Could not get the user [email]: ${req.body.email}`);
    })
});

router.get('/', function(req, res){
  controller
    .getUser(req.body.identification)
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
    .updateUser(identification, req.body.firstName, req.body.lastName, req.body.email, req.body.password)
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