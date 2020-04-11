const store = require('./store')

function addUser (identification, firstName, lastName, profile){
  return new Promise ((resolve, reject) => {
    if(!identification || !firstName || !lastName || !profile){
      console.error('[userController-add] didn´t enter all the required files');
      reject('Left required fields')
      return false
    }

    const user = {
      identification: identification,
      firstName: firstName,
      lastName: lastName,
      profile: profile
    }

    store
    .getUser(identification)
    .then((data) => {
      if(!data)
        resolve(store.addUser(user))
      else
        reject('User already exists in our database')
    })
  });
}

function getUser (identification){
  return new Promise((resolve, reject) => {
    if(identification)
      resolve(store.getUser(identification))
    else
      resolve(store.getAllUsers())

    reject(`Could not get the user [id]: ${identification}`)
  })
};

function updateUser (identification, firstName, lastName, profile){
  return new Promise((resolve, reject) => {
    if(!identification){
      console.error('[userController-update] Identification is mandatory');
      reject('Identification is mandatory')
      return false
    }

    store
    .getUser(identification)
    .then((data) => {
      if(data){
        data.firstName = firstName || data.firstName
        data.lastName = lastName || data.lastName
        data.profile = profile || data.profile

        resolve(store.updateUser(data))
      }else
        reject('User doesn´t exists in our database')
    })

  })
};

function deleteUser (identification){
  return new Promise((resolve, reject) => {
    if(!identification){
      console.error('[userController-update] Identification is mandatory');
      reject('Identification is mandatory')
      return false
    }

  store
    .deleteUser(identification)
    .then((data) => {
      if(data)
        resolve()
      else
        reject('User doesn´t exist in our database')
    })
  })
};

module.exports = {
  addUser,
  getUser,
  updateUser,
  deleteUser
}