const store = require('./store')

function addCategory (name){
  return new Promise ((resolve, reject) => {
    if(!name){
      console.error('[messageController - message] Fields required');
      reject('Incorrect Name of the product')
      return false
    }

    const fullCategory = {
      name: this.name
    }
    
    resolve(store.addCategory(fullCategory))
  });
}

function getCategories (){
  return new Promise((resolve, reject) => {
    resolve(store.getCategories())
    reject('Could not get the categories')
  })
};

function updateCategory (id, name){
  return new Promise((resolve, reject) => {
    if(!id || !name){
      console.error('[messageController] Name required');
      reject('Fields required')
      return false
    }
    resolve(store.updateCategory(id, name))
  })
};

function deleteCategory (id){
  return new Promise((resolve, reject) => {
    if(!id){
      console.error('[messageController] id required');
      reject('Fields required')
      return false
    }
    resolve(store.deleteCategory(id))
  })
};

module.exports = {
  addCategory,
  getCategories,
  updateCategory,
  deleteCategory
}
