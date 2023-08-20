const Repository = require('../repositories/transactionRepository')

async function execute(body) {
   const repository = new Repository()

  try {
   await repository.create(body)

   return {success: true}   
  } catch (error) {
   return {sucess: false, errorMessage: error.message }
   
  }              
}

module.exports = execute