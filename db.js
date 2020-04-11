const db = require('mongoose')

db.Promise = global.Promise;
async function connect(){
  const uri = 'mongodb+srv://admin:admin@maincluster-5ntkm.mongodb.net/HydroponicProject?retryWrites=true&w=majority'
  await db.connect(uri, {
              useNewUrlParser: true,
              useUnifiedTopology: true})
          .then(() =>{
            console.log('Conexion creada exitosamente')
          })
          .catch((e) =>{
            console.error(e)
          })
}

module.exports = {
  connect
}
