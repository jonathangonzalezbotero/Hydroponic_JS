const Model = require('./model')
const Product = require('../product/model')
const User = require('../user/model')

async function addUser(user){
  const myUser = new Model(user)
  return await myUser.save()
}

async function addProductToUser(identification, idProduct){
  const foundUser = await User.findOne({
    identification: identification
  })

  const foundProduct = await Product.findOne({
    _id: idProduct
  })
  if(foundProduct && foundUser){
    foundUser.product = foundProduct
  }

  return await foundUser.save()
}

async function getUser(idUser){
  let filter = {}
  if (idUser)
    filter = {
      identification: idUser
    }
  return await Model.find(filter)
}

async function updateUser(idUser, firstName, lastName, profile){
  const foundUser = await Model.findOne({
    identification: idUser
  })
  if(foundUser){
    foundUser.firstName = firstName
    foundUser.lastName = lastName
    foundUser.profile = profile
  }

  return await foundUser.save()
}

async function deleteUser(idUser){
  return await Model.deleteOne({
    identification: idUser
  })
}

module.exports = {
  addUser,
  addProductToUser,
  getUser,
  updateUser,
  deleteUser
}
