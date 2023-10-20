const {
  getExpensesService,
  findExpenseService,
  createExpenseService,
  updateExpenseService,
  deleteExpenseService,
  getTotalByCategoryService,
} = require("../services/expensesServices");

const getExpensesController = async (req, res) => {
  try {
    const { category = null, startDate = null, endDate = null } = req.query;
    console.log(category, startDate, endDate);
    const expenses = await getExpensesService(category, startDate, endDate);
    return res.status(200).json({
      message: "GET EXPENSES SUCCESS",
      expenses,
    });
  } catch (err) {
    return res.status(500).json({
      message: "GET EXPENSES ERROR",
    });
  }
};

const findExpenseController = async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await findExpenseService(id);
    return res.status(200).json({
      message: "FIND EXPENSES DETAIL SUCCESS",
      expense,
    });
  } catch (err) {
    return res.status(500).json({
      message: "FIND EXPENSES DETAIL ERROR",
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
      message: "CREATE EXPENSES SUCCESS",
    });
  } catch (err) {
    return res.status(500).json({
      message: "CREATE EXPENSES SUCCESS",
      err,
    });
  }
};

const updateExpenseController = async (req, res) => {
  try {
    let dates = new Date();
    const { id } = req.params;
    let { name, nominal, category, dateUpdated } = req.query;
    await updateExpenseService(
      id,
      name,
      nominal,
      category,
      (dateUpdated = `${dates.getFullYear()}-${
        dates.getMonth() + 1
      }-${dates.getDate()}`)
    );
    return res.status(201).json({
      message: "UPDATE SUCCESS",
    });
  } catch (err) {
    return res.status(500).json({
      message: "UPDATE FAILED",
      err,
    });
  }
};

const deleteExpenseController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteExpenseService(id);
    return res.status(200).json({
      message: "EXPENSES DELETED",
    });
  } catch (err) {
    return res.status(500).json({
      message: "FAILED TO DELETE EXPENSES",
      err,
    });
  }
};

const getTotalByCategoryController = async (req, res) => {
  try {
    let { category } = req.query;
    let dataCategory = getTotalByCategoryService(category);
    return res.status(200).json({
      message: "CATEGORY FINDED",
      dataCategory,
    });
  } catch (err) {
    return res.status(500).json({
      message: "FAILED TO FIND CATEGORY",
      err,
    });
  }
};
module.exports = {
  getExpensesController,
  findExpenseController,
  createExpenseController,
  updateExpenseController,
  deleteExpenseController,
  getTotalByCategoryController,
};
