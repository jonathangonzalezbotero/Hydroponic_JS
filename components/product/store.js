const Model = require('./model')

function addProduct(product){
  const myProduct = new Model(product)
  myProduct.save()
}

async function getProductByCategory(filterCategory){
  return new Promise((resolve, reject) => {
    let filter = {}
    if (filterCategory)
      filter = {
        category: filterCategory
      }
    Model.find(filter)
        .populate('category')
        .exec((error, populated) =>{
          if(error)
            reject(error)

          resolve(populated)
        })
  })
}

async function updateProduct(id, name){
  const foundProduct = await Model.findOne({
    _id: id
  })
  if(foundProduct)
    foundProduct.name = name

  return await foundProduct.save()
}

async function deleteProduct(id){
  return await Model.deleteOne({
    _id: id
  })
}

module.exports = {
  addProduct,
  getProductByCategory,
  updateProduct,
  deleteProduct
}
