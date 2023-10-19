const express = require("express");

const router = express.Router();

const {
  getExpensesController,
  findExpenseController,
  createExpenseController,
  updateExpenseController,
  deleteExpenseController,
} = require("../controllers/expensesController");

router.get("/", getExpensesController);
router.get("/:id", findExpenseController);
router.post("/", createExpenseController);
router.patch("/:id", updateExpenseController);
router.delete("/:id", deleteExpenseController);

module.exports = router;
