const axios = require("axios");

const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

const JSON_URL = process.env.JSON_URL;

const getExpensesQuery = async () => {
  try {
    const { data } = await axios.get(`${JSON_URL}/expenses`);
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
};

module.exports = { getExpensesQuery };
