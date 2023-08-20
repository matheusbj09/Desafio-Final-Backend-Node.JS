const Repository = require('../repositories/transactionRepository')

async function execute(id) {
    const repository = new Repository()
    try {
        await repository.delele(id)

        return { sucess: true }
    } catch (error) {
        return { sucess: false, errorMessage: error.message }
    }
}

module.exports = {execute}