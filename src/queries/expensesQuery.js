const axios = require("axios");

const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

const URL = process.env.JSON_URL;

const getExpensesQuery = async () => {
  try {
    const { data } = await axios.get(`${URL}/expenses`);
    return data;
  } catch (err) {
    throw err;
  }
};

module.exports = { getExpensesQuery };
