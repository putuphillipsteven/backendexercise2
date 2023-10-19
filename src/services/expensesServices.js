const {
  getExpensesQuery,
  findExpense,
  createExpense,
  updateExpense,
} = require("../queries/expensesQuery");

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

const createExpenseService = async (name, nominal, category, date) => {
  try {
    await createExpense(name, nominal, category, date);
  } catch (err) {
    throw err;
  }
};

const updateExpenseService = async (id, name) => {
  try {
    await updateExpense(id, name);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getExpensesService,
  findExpenseService,
  createExpenseService,
  updateExpenseService,
};
