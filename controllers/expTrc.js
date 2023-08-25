const Expense = require('../models/expense');

exports.postExpense = async (req, res, next) => {
    try{
    const amount = req.body.amount;
    // console.log(name)
    const description = req.body.description;
    const category = req.body.category;
    const data = await Expense.create({amount: amount, description: description, category: category});
    res.status(201).json({addExpense: data});
    } catch(err){
        console.error("Error adding user:", err);
        res.status(500).json({
            error: err.message
            
        })
    }
}

exports.getExpense = async (req, res, next) => { 
    try{
    const expenses = await Expense.findAll();
    res.status(200).json({allExpense: expenses});
    } catch(err){
        console.error("Error adding user:", err);
        res.status(500).json({
            error: err.message
            
        })
    }
}

exports.deleteExpense = async (req, res, next) => {
    const id = req.params.id;
    await Expense.destroy({where: {id: id}});
    res.sendStatus(204);
}