const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
  category: {
    type: Schema.ObjectId,
    required: true,
    ref: 'Category'
  },
  name: {
    type: String,
    required: true
  }
})

const model = mongoose.model('Product', mySchema)

module.exports = model
