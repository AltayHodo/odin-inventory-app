const pool = require('./pool');

async function getAllCategories() {
  const { rows } = await pool.query('SELECT * FROM categories');
  return rows;
}

async function getAllItems() {
  const { rows } = await pool.query('SELECT * FROM items');
  return rows;
}

async function addCategory(name) {
  await pool.query('INSERT INTO categories (name) VALUES ($1)', [name]);
}

async function addItem(name, category_id) {
  await pool.query('INSERT INTO items (name, category_id) VALUES ($1, $2)', [
    name,
    category_id,
  ]);
}

module.exports = {
  getAllCategories,
  getAllItems,
  addCategory,
  addItem,
};
