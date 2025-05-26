const pool = require('../db/pool');

async function createTables() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS categories (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS items (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
      );
    `);

    console.log("Tables created successfully.");
  } catch (err) {
    console.error("Error creating tables:", err);
  } finally {
    pool.end();
  }
}

createTables();
