const store = require('./store')
const bcrypt = require('bcryptjs')

function addUser (identification, firstName, lastName, profile, email, password){
  return new Promise ((resolve, reject) => {
    if(!identification || !firstName || !lastName || !profile || !email || !password){
      console.error('[userController-add] didn´t enter all the required files');
      reject('Left required fields')
      return false
    }

    const user = {
      identification: identification,
      firstName: firstName,
      lastName: lastName,
      profile: profile,
      email: email,
      password: bcrypt.hashSync(password, 10)
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

function signIn (email, password){
  return new Promise((resolve, reject) => {
    if(email && password)
      resolve(store.authenticate(email, password))
    else
      reject('Email and password are mandatory')

    reject(`Login failed, could not find the user [email]: ${email}`)
  })
};

function getUser (identification){
  return new Promise((resolve, reject) => {
    if(identification)
      resolve(store.getUser(identification))
    else
      resolve(store.getAllUsers())

    reject(`Could not get the user [id]: ${identification}`)
  })
};

function updateUser (identification, firstName, lastName, profile, email, password){
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
        data.email = email || data.email
        data.password = password || data.password

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
  signIn,
  getUser,
  updateUser,
  deleteUser
}