const axios = require("axios");

const JSON_URL = process.env.JSON_URL;

const getExpensesQuery = async () => {
  try {
    const { data } = await axios.get(`${JSON_URL}/expenses`);
    return data;
  } catch (err) {
    throw err;
  }
};

const findExpense = async (id) => {
  try {
    const { data } = await axios.get(`${JSON_URL}/expenses/${id}`);
    return data;
  } catch (err) {
    throw err;
  }
};

module.exports = { getExpensesQuery, findExpense };
