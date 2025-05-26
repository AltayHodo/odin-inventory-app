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

module.exports = { getCategories };
