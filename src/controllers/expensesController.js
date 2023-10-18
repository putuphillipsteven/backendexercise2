const {
  getExpensesService,
  findExpenseService,
  createExpenseService,
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

const createExpenseController = async (req, res) => {
  try {
    const { name, nominal, category } = req.body;
    let date = new Date();
    const expense = await createExpenseService(
      name,
      nominal,
      category,
      (date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
    );
    return res.status(201).json({
      message: "Create expense success",
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getExpensesController,
  findExpenseController,
  createExpenseController,
};
