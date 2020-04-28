const Model = require('./model')
const bcrypt = require('bcryptjs')

async function addUser(user){
  const myUser = new Model(user)
  return await myUser.save()
}

async function authenticate(email, password) {
  const user = await Model.findOne({email})
  if (user && bcrypt.compareSync(password, user.password)) {
      const { password, ...userWithoutHash } = user.toObject();
      return await {
          ...userWithoutHash
      };
  }
}

async function getUser(identification){
  return await Model.findOne({identification})
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
  authenticate,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser
}
