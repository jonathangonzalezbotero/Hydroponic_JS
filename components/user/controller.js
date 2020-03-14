const store = require('./store')

function addUser (identification, firstName, lastName, profile){
  return new Promise ((resolve, reject) => {
    if(!identification || !firstName || !lastName || !profile){
      console.error('[messageController - user] did not enter all the required files');
      reject('Left required fields')
      return false
    }

    const user = {
      identification: this.identification,
      firstName: this.firstName,
      lastName: this.lastName,
      profile: this.profile
    }
    resolve(store.addUser(user))
  });
}

function addProductToUser (identification, idProduct){
  return new Promise((resolve, reject) => {
    if(!identification || !idProduct){
      console.error('[messageController - user] Product or User required');
      reject('Required fields')
      return false
    }

    resolve(store.addProductToUser(identification, idProduct))
  })
};

function getUser (identification){
  return new Promise((resolve, reject) => {
    resolve(store.getUser(identification || null))
    reject(`Could not get the user [id]: ${identification}`)
  })
};

function updateUser (identification, firstName, lastName, profile){
  return new Promise((resolve, reject) => {
    if(!identification || !firstName || !lastName || !profile){
      console.error('[messageController - user] did not enter all the required files');
      reject('Left required fields')
      return false
    }
    resolve(store.updateUser(identification, firstName, lastName, profile))
  })
};

function deleteUser (identification){
  return new Promise((resolve, reject) => {
    if(!identification){
      console.error('[messageController - user] did not enter all the required files');
      reject('Left required fields')
      return false
    }
    resolve(store.deleteUser(identification))
  })
};

module.exports = {
  addUser,
  addProductToUser,
  getUser,
  updateUser,
  deleteUser
}
