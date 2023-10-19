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

const createExpense = async (name, nominal, category, date) => {
  try {
    await axios.post(`${JSON_URL}/expenses`, { name, nominal, category, date });
  } catch (err) {
    throw err;
  }
};

const updateExpense = async (id, name) => {
  try {
    await axios.patch(`${JSON_URL}/expenses/${id}`, {
      name,
    });
  } catch (err) {
    throw err;
  }
};

const deleteExpense = async (id) => {
  try {
    await axios.delete(`${JSON_URL}/expenses/${id}`);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getExpensesQuery,
  findExpense,
  createExpense,
  updateExpense,
  deleteExpense,
};
