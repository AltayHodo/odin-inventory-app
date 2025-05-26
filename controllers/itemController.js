const db = require('../db/queries');

async function getItems(req, res) {
  try {
    const items = await db.getAllItems();
    res.render('items', { title: 'Items', items: items });
  } catch (err) {
    console.error('Error fetching items:', err);
    res.status(500).send('Internal Server Error');
  }
}

async function showNewItemForm(req, res) {
  try {
    const categories = await db.getAllCategories();
    res.render('add-item', { title: 'Add New Item', categories });
  } catch (err) {
    console.error('Error showing form:', err);
    res.status(500).send('Internal Server Error');
  }
}

async function createItem(req, res) {
  try {
    const { name, category_id } = req.body;
    if (!name || !category_id) {
      return res.status(400).send('Item name and category are required');
    }

    await db.addItem(name, category_id);
    res.redirect('/items');
  } catch (err) {
    console.error('Error creating item:', err);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  getItems,
  showNewItemForm,
  createItem,
};
