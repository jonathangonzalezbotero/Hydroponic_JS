const Model = require('./model')
const Product = require('../product/model')
const User = require('../user/model')

async function addUser(user){
  const myUser = new Model(user)
  return await myUser.save()
}

async function getUser(idUser){
  let filter = {}
  if (idUser)
    filter = {
      identification: idUser
    }
  return await Model.findOne(filter)
}

async function getAllUsers(){
  return await Model.find()
}

async function updateUser(user){
  return await user.save()
}

async function deleteUser(identification){
  return await Model.findOneAndDelete({
    identification: identification
  })
}

module.exports = {
  addUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser
}
