const { getExpensesQuery, findExpense } = require("../queries/expensesQuery");

const getExpensesService = async () => {
  try {
    const expenses = await getExpensesQuery();
    return expenses;
  } catch (err) {
    throw err;
  }
};

const findExpenseService = async (id) => {
  try {
    const expense = await findExpense(id);
    return expense;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getExpensesService,
  findExpenseService,
};
