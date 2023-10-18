const { getExpensesQuery } = require("../queries/expensesQuery");

const getExpensesService = async () => {
  try {
    const expenses = await getExpensesQuery();
    return expenses;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getExpensesService,
};
