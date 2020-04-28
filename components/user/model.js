const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
  identification: String,
  firstName: String,
  lastName: String,
  profile: String,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
})

const model = mongoose.model('User', mySchema)

module.exports = model
