const express = require("express");

const router = express.Router();

const {
  getExpensesController,
  findExpenseController,
} = require("../controllers/expensesController");

router.get("/", getExpensesController);
router.get("/:id", findExpenseController);

module.exports = router;
