const express = require("express");

const router = express.Router();

const {
  getExpensesController,
  findExpenseController,
  createExpenseController,
} = require("../controllers/expensesController");

router.get("/", getExpensesController);
router.get("/:id", findExpenseController);
router.post("/", createExpenseController);

module.exports = router;
