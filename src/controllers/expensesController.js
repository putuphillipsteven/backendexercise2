const {
  getExpensesService,
  findExpenseService,
  createExpenseService,
  updateExpenseService,
  deleteExpenseService,
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
    const expense = await findExpenseService(id);
    return res.status(200).json({
      message: "Find expense detail success",
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
    await createExpenseService(
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

const updateExpenseController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await updateExpenseService(id, name);
    return res.status(201).json({
      message: "Update Success",
    });
  } catch (err) {
    throw err;
  }
};

const deleteExpenseController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteExpenseService(id);
    return res.status(200).json({
      message: "Expenses Deleted",
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getExpensesController,
  findExpenseController,
  createExpenseController,
  updateExpenseController,
  deleteExpenseController,
};
