const express = require("express");

const router = express.Router();

const {
  getExpensesController,
  findExpenseController,
  createExpenseController,
  updateExpenseController,
} = require("../controllers/expensesController");

router.get("/", getExpensesController);
router.get("/:id", findExpenseController);
router.post("/", createExpenseController);
router.patch("/:id", updateExpenseController);

module.exports = router;
