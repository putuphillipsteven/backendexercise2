const {
  getExpensesService,
  findExpenseService,
} = require("../services/expensesServices");

const getExpensesController = async (req, res) => {
  try {
    const expenses = await getExpensesService();
    return res.status(200).json({
      message: "Get Expenses Success",
      expenses,
    });
  } catch (err) {
    return res.status(500).json({
      message: "get Error",
    });
  }
};

const findExpenseController = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const expense = await findExpenseService(id);
    return res.status(200).json({
      message: "The detail",
      expense,
    });
  } catch (err) {
    return res.status(500).json({
      message: "find Error",
      err,
    });
  }
};
module.exports = {
  getExpensesController,
  findExpenseController,
};
