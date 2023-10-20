const axios = require("axios");

const JSON_URL = process.env.JSON_URL;

const getExpensesQuery = async (category, startDate, endDate) => {
  try {
    let url = `${JSON_URL}/expenses`;
    if (category) url = `${url}?category=${category}`;
    if (startDate && endDate)
      url = `${url}?date_gte=${startDate}&&date_lte=${endDate}`;
    const { data } = await axios.get(url);
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

const updateExpense = async (id, name, nominal, category, dateUpdated) => {
  try {
    await axios.patch(`${JSON_URL}/expenses/${id}`, {
      name,
      nominal,
      category,
      dateUpdated,
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

const getTotalByCategory = async (category) => {
  try {
    const { expenses } = await axios.get(
      `${JSON_URL}/expenses?category=${category}`
    );
    return expenses;
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
  getTotalByCategory,
};
