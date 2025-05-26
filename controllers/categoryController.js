const db = require('../db/queries');

async function getCategories(req, res) {
  try {
    const categories = await db.getAllCategories();
    res.render('categories', { title: 'Categories', categories: categories });
  } catch (err) {
    console.error('Error fetching categories:', err);
    res.status(500).send('Internal Server Error');
  }
}

function showNewCategoryForm(req, res) {
  res.render('add-category', { title: 'Add New Category' });
}

async function createCategory(req, res) {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).send('Category name is required');
    }

    await db.addCategory(name);
    res.redirect('/categories');
  } catch (err) {
    console.error('Error creating category:', err);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = { getCategories, showNewCategoryForm, createCategory };
