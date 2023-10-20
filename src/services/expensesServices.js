const {
  getExpensesQuery,
  findExpense,
  createExpense,
  updateExpense,
  deleteExpense,
} = require("../queries/expensesQuery");

const getExpensesService = async (category, startDate, endDate) => {
  try {
    const expenses = await getExpensesQuery(category, startDate, endDate);
    console.log(category, startDate, endDate);
    if (category || (startDate && endDate)) {
      let categoryNominal = expenses
        .map((data) => {
          return data["nominal"];
        })
        .reduce((total, num) => +total + +num);
      return categoryNominal;
    }
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

const updateExpenseService = async (
  id,
  name,
  nominal,
  category,
  dateUpdated
) => {
  try {
    await updateExpense(id, name, nominal, category, dateUpdated);
  } catch (err) {
    throw err;
  }
};

const deleteExpenseService = async (id) => {
  try {
    await deleteExpense(id);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getExpensesService,
  findExpenseService,
  createExpenseService,
  updateExpenseService,
  deleteExpenseService,
};
