const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
  identification: String,
  firstName: String,
  lastName: String,
  profile: String
})

const model = mongoose.model('User', mySchema)

module.exports = model
