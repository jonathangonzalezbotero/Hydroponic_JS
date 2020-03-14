const Model = require('./model')

async function addCategory(category){
  const myCategory = new Model(category)
  return await myCategory.save()
}

async function getCategories(){
  return await Model.findAll()
}

async function updateCategory(id, name){
  const foundCategory = await Model.findOne({
    _id: id
  })
  if(foundCategory)
  foundCategory.name = name

  return await foundCategory.save()
}

async function deleteCategory(id){
  return await Model.deleteOne({
    _id: id
  })
}

module.exports = {
  addCategory,
  getCategories,
  updateCategory,
  deleteCategory
}
