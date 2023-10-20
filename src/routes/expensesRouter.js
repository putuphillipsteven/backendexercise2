const express = require("express");

const router = express.Router();

const {
  getExpensesController,
  findExpenseController,
  createExpenseController,
  updateExpenseController,
  deleteExpenseController,
  getTotalByCategoryController,
} = require("../controllers/expensesController");

router.get("/", getExpensesController);
router.get("/:id", findExpenseController);
router.post("/", createExpenseController);
router.patch("/:id", updateExpenseController);
router.delete("/:id", deleteExpenseController);
// router.get("/category", getTotalByCategoryController);

module.exports = router;
