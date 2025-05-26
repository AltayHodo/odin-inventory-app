const db = require('../db/queries');

async function getItems(req, res) {
  try {
    const items = await db.getAllItems();
    res.render('items', { title: 'Items', items });
  } catch (err) {
    console.error('Error fetching items:', err);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = { getItems };
