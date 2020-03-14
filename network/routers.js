const product = require('../components/product/network')
const user = require('../components/user/network')
const category = require('../components/category/network')

const routers = server => {
  server.use('/product', product)
  server.use('/user', user)
  server.use('/category', category)
}

module.exports = routers
