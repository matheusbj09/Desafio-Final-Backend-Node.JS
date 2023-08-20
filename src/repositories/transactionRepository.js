const  {startConnection, closeConnection} = require ('../infra/db/mongodb')
const transactionModel = require('../models/transaction')

class transactionRepository{
    async create(params){
        try {
            await startConnection();
            await transactionModel.create(params)
            await closeConnection();
    
        } catch (error) {
            console.log(error)
            throw new Error('Erro ao criar transação')
            
        }
       
    }
    async findAll(){

        try {
            await startConnection();
            const transactions = await transactionModel.find()
            await closeConnection();
            return transactions
        
            
        } catch (error) {
            console.log(error)
            throw new Error('Erro ao listar transações')
        }
    }
  async update(_id, data){
    try {
        await startConnection();
        await transactionModel.updateOne({_id}, data)
        await closeConnection();
    } catch (error) {
        console.log(error)
            throw new Error('Erro ao editar transação')
        
    }
  }
  async delele(_id){
    try {
        await startConnection();
        await transactionModel.deleleOne({_id})
        await closeConnection();
    } catch (error) {
        console.log(error)
            throw new Error('Erro ao deletar transação')
    }
  }
}

module.exports = transactionRepository
