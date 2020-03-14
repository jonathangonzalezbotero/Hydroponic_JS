const store = require('./store')

function addProduct (category, name){
  return new Promise ((resolve, reject) => {
    if(!category || !name){
      console.error('[messageController - message] Fields required');
      reject('Incorrect Name of the product')
      return false
    }

    const fullProduct = {
      category: this.category,
      name: this.name
    }
    
    resolve(store.addProduct(fullProduct))
  });
}

function getProductByCategory (filterCategory){
  return new Promise((resolve, reject) => {
    resolve(store.getProductByCategory(filterCategory || null))
    reject('Could not get the products related to the category')
  })
};

function updateProduct (id, name){
  return new Promise((resolve, reject) => {
    if(!id || !name){
      console.error('[messageController] Name required');
      reject('Fields required')
      return false
    }
    resolve(store.updateProduct(id, name))
  })
};

function deleteProduct (id){
  return new Promise((resolve, reject) => {
    if(!id){
      console.error('[messageController] id required');
      reject('Fields required')
      return false
    }
    resolve(store.deleteProduct(id))
  })
};

module.exports = {
  addProduct,
  getProductByCategory,
  updateProduct,
  deleteProduct
}
