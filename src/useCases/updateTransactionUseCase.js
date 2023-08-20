const Repository = require('../repositories/transactionRepository')

async function execute(id, data){
 const respository = new Repository()
  try {
    await respository.update(id, data)
    return {sucess: true}
  } catch (error) {
    return {sucess: false, errorMessage: error.message}
  }
}
module.exports = {execute}