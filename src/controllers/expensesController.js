const { getExpensesService } = require("../services/expensesServices");

const getExpensesController = async (req, res) => {
  try {
    const expenses = await getExpensesService();
    return res.status(200).json({
      message: "Get Expenses Success",
      data: expenses,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getExpensesController,
};
