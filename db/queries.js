const pool = require('./pool');

async function getAllCategories() {
  const { rows } = await pool.query('SELECT * FROM categories');
  return rows;
}

async function getAllItems() {
  const { rows } = await pool.query(`
    SELECT items.id, items.name, items.category_id, categories.name AS category_name
    FROM items
    JOIN categories ON items.category_id = categories.id
  `);
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

async function deleteItem(id) {
  await pool.query('DELETE FROM items WHERE id = $1', [id]);
}

async function getItemById(id) {
  const { rows } = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
  return rows[0];
}

async function updateItem(id, name, category_id) {
  await pool.query(
    'UPDATE items SET name = $1, category_id = $2 WHERE id = $3',
    [name, category_id, id]
  );
}

async function deleteCategory(id) {
  await pool.query('DELETE FROM categories WHERE id = $1', [id]);
}

module.exports = {
  getAllCategories,
  getAllItems,
  addCategory,
  addItem,
  deleteItem,
  getItemById,
  updateItem,
  deleteCategory,
};
