const Repository = require('../repositories/transactionRepository')

async function execute() {
    const repository = new Repository()
    try {
        return await repository.findAll()
    } catch (error) {
        return{errorMessage:error.messeger}
    }
   
}

module.exports = { execute }