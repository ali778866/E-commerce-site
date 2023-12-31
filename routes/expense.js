const express = require('express');

const router = express.Router();

const expenseController = require('../controllers/expTrc');

router.post('/add-expense', expenseController.postExpense);

router.get('/get-expense', expenseController.getExpense);

router.delete('/delete-expense/:id', expenseController.deleteExpense);

module.exports = router;