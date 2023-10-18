const express = require("express");

const router = express.Router();

const { getExpensesController } = require("../controllers/expensesController");

router.get("/", getExpensesController);

module.exports = router;
