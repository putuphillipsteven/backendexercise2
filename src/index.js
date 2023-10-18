const express = require("express");

const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

const parser = require("body-parser");

const PORT = process.env.PORT || 8000;

const app = new express();

app.use(parser.json());

app.use((req, res, next) => {
  console.log(`Time: ${Date.now()}`);
  next();
});

const expensesRouter = require("./routes/expensesRouter");

app.use("/expenses", expensesRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
